import { IVinApiResponse } from "./interfaces";
import * as axios from "axios";

export class VehicleIdentificationNumberService {
  protected async getVinDetails(vinRaw: string): Promise<IVinApiResponse> {
    try {
      const response = await axios.default.get<IVinApiResponse>(process.env.VIN_EXTERNAL_API + `/${vinRaw}?format=json`);
      return response.data;
    } catch (err) {
      console.error("[error] External VIN API error - ", err);
    }
  }
}