import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { CarColor } from "./car-color.enum";

export class CarDetailsInput {
  @IsString()
  @Length(3, 120)
    nameOnRegistration: string;
  @IsString()
  @Length(4, 8)
    licensePlateNumber: string;
  @IsString()
  @Length(10, 10)
    registrationNumber: string;
  @IsString()
  @IsNotEmpty()
    vehicleIdentificationNumber: string;
  @IsString()
  @Length(2, 2)
    registrationState: string;
  @IsDateString()
    registrationExpiration: Date;
  @IsNumber()
  @IsNotEmpty()
    carValue: number;
  @IsNumber()
  @IsNotEmpty()
    currentMileage: number;
  @IsString()
  @Length(3, 250)
    description: string;
  @IsString()
  @IsNotEmpty()
    carColor: CarColor;
  @IsString()
  @IsOptional()
    otherCarColor?: string;
}