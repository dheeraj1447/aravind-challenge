import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { CarDetailsService } from "../../service/car-details";

import { CarDetailsInput, CarDetailsModel, CarDetailsStatus, ICarDetails } from "../../models";
import { validateOrReject } from "class-validator";

@JsonController("/car-details")
export class CarDetailsController {
  constructor(private __carDetailsService: CarDetailsService) {
    this.__carDetailsService = new CarDetailsService();
  }

  @Get("/all")
  get(): Promise<ICarDetails[]> {
    return CarDetailsModel.find();
  }

  @Get("/:id")
  getById(@Param("id") id: string) {
    return CarDetailsModel.findOne(id);
  }

  @Post("/delete/:id")
  delete(@Param("id") id: string) {
    return CarDetailsModel.update({id}, {deletedDate: new Date(), status: CarDetailsStatus.INACTIVE});
  }

  @Post("/deactivate/:id")
  deactivate(@Param("id") id: string) {
    return CarDetailsModel.update({id}, {status: CarDetailsStatus.INACTIVE});
  }

  @Post("/create")
  async create(@Body() data: CarDetailsInput) {
    await validateOrReject(data);
    return this.__carDetailsService.createCarDetails(data);
  }
}
