import { IBaseModel } from "../base-model";

export interface IVehicleIdentificationNumber extends IBaseModel {
  vinRaw: string;
  make: string;
  model: string;
  modelYear: string;
}