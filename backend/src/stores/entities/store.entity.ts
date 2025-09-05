import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
export class Store extends Model<Store> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  store_image: string;
}
