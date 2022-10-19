import { IsDateString, IsNotEmpty, IsOptional, Length } from "class-validator";
import { Column, Entity } from "typeorm";
import { BaseModel } from "../base-model/base-model.model";
import { CarColor } from "./car-color.enum";
import { ICarDetails } from "./car-details";
import { CarDetailsStatus } from "./car-details-status.enum";

@Entity("car_details")
export class CarDetailsModel extends BaseModel implements ICarDetails {
  @Column("varchar", {name: "name_on_registration", length: 120, nullable: false})
  @Length(3, 120)
    nameOnRegistration: string;
  @Column("varchar", {name: "license_plate_number", length: 8, unique: true, nullable: false})
  @Length(4, 8)
    licensePlateNumber: string;
  @Column("varchar", {name: "registration_number", length: 10, unique: true, nullable: false})
  @Length(10, 10)
    registrationNumber: string;
  @Column("varchar", {name: "registration_state", length: 2, nullable: false})
  @Length(2, 2)
    registrationState: string;
  @Column("timestamp", {name: "registration_expiration", nullable: false})
  @IsDateString()
    registrationExpiration: Date;
  @Column("varchar", {name: "vehicle_identification_number_id", nullable: false})
  @IsNotEmpty()
    vehicleIdentificationNumberId: string;
  @Column("integer", {name: "car_value", nullable: false})
  @IsNotEmpty()
    carValue: number;
  @Column("integer", {name: "current_mileage", nullable: false})
  @IsNotEmpty()
    currentMileage: number;
  @Column("varchar", {name: "description", length: 250, nullable: false})
  @Length(3, 250)
    description: string;
  @Column("enum", {enum: CarColor, name: "car_color", default: CarColor.OTHER})
    carColor: CarColor;
  @Column("varchar", {nullable: true, name: "other_car_color"})
  @IsOptional()
    otherCarColor?: string;
  @Column("enum", {enum: CarDetailsStatus, name: "status", default: CarDetailsStatus.ACTIVE})
  @IsNotEmpty()
    status: CarDetailsStatus;
}

