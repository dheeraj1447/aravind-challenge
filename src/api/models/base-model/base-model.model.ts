import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IBaseModel } from "./base-model";

export class BaseModel extends BaseEntity implements IBaseModel {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @CreateDateColumn({name: "created_date"})
    createdDate: Date;

  @UpdateDateColumn({name: "updated_date"})
    updatedDate: Date;

  @DeleteDateColumn({name: "deleted_date"})
    deletedDate: Date;
}