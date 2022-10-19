import { IsNotEmpty, IsString, Length } from "class-validator";
import { Column, Entity } from "typeorm";
import { BaseModel } from "../base-model/base-model.model";
import { IVehicleIdentificationNumber } from "./vehicle-identification-number";

@Entity("vehicle_identification_number")
export class VehicleIdentificationNumberModel extends BaseModel implements IVehicleIdentificationNumber {
  @Column("varchar", {name: "vin_raw", unique: true, nullable: false})
  @IsNotEmpty()
    vinRaw: string;
  @Column("varchar", {name: "make", length: 16, nullable: false})
  @Length(3, 16)
    make: string;
  @Column("varchar", {name: "model", length: 16, nullable: false})
  @Length(3, 16)
    model: string;
  @Column("varchar", {name: "model_year"})
  @IsString()
    modelYear: string;
}
