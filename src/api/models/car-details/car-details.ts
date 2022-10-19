import { IBaseModel } from "../base-model";
import { CarColor } from "./car-color.enum";
import { CarDetailsStatus } from "./car-details-status.enum";

export interface ICarDetails extends IBaseModel {
  nameOnRegistration: string;
  licensePlateNumber: string;
  registrationNumber: string;
  registrationState: string;
  registrationExpiration: Date;
  vehicleIdentificationNumberId: string;
  carValue: number;
  currentMileage: number;
  description: string;
  carColor: CarColor;
  otherCarColor?: string;
  status: CarDetailsStatus;
}