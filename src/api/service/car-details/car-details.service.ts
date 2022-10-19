import { CarDetailsInput, CarDetailsModel, CarDetailsStatus, ICarDetails, IVehicleIdentificationNumber, VehicleIdentificationNumberModel } from "../../models";
import { IVinApiResponse, IVinResult, VehicleIdentificationNumberService } from "../vehicle-identification-number";

export class CarDetailsService extends VehicleIdentificationNumberService {
  public async createCarDetails(carDetails: CarDetailsInput) {
    try {
      const vinResponse = await this.getVinDetails(carDetails.vehicleIdentificationNumber);
      const toCarCreateDetails = await this.__toCreateCarDetails(carDetails, vinResponse);
      return CarDetailsModel.create(toCarCreateDetails).save();
    } catch (err) {
      console.error("[error] car details creation failed", err);
      throw err;
    }
  }

  private async __toCreateCarDetails(carDetails: CarDetailsInput, vinResponse: IVinApiResponse): Promise<Partial<ICarDetails>> {
    const {nameOnRegistration, licensePlateNumber, registrationNumber, registrationState, registrationExpiration } = carDetails;
    const {carColor, otherCarColor, carValue, currentMileage, description, vehicleIdentificationNumber} = carDetails;
    const vinDetails = this.__getVinDecodedValues(vehicleIdentificationNumber, vinResponse);
    const createdVinDetails = await VehicleIdentificationNumberModel.create(vinDetails).save();
    return {
      nameOnRegistration,
      licensePlateNumber,
      registrationNumber,
      registrationState,
      registrationExpiration,
      vehicleIdentificationNumberId: createdVinDetails.id,
      carColor,
      otherCarColor,
      carValue,
      currentMileage,
      description,
      status: CarDetailsStatus.ACTIVE,
    };
  }

  private __getVinDecodedValues(vinRaw: string, vinResponse: IVinApiResponse): Partial<IVehicleIdentificationNumber> {
    const {Results} = vinResponse;
    return {
      vinRaw,
      make: this.__findResult(Results, "Make"),
      model: this.__findResult(Results, "Model"),
      modelYear: this.__findResult(Results, "Model Year"),
    };
  }

  private __findResult(results: IVinResult[], field: "Model" | "Make" | "Model Year") {
    const foundDetails = results.find(result => result.Variable === field);
    if (foundDetails) {
      return foundDetails.Value;
    }
    return undefined;
  }
}