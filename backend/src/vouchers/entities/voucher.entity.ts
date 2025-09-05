import {
  AllowNull,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Store } from 'src/stores/entities/store.entity';

@Table
export class Voucher extends Model<Voucher> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  discount: string;

  @AllowNull(false)
  @Column
  discount_type: string; // enum?

  @AllowNull(false)
  @Column
  tag: string;

  @Column
  downloads: number;

  @Column
  expiry: string; // DATE?

  @AllowNull(false)
  @Column
  status: string; // enum?

  @Column
  product_image: string;

  @AllowNull(false)
  @ForeignKey(() => Store)
  @Column
  store_id: number;
}
