import {
  AutoIncrement,
  Column,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  @NotNull
  firstname: string;

  @Column
  lastname: string;

  @Column
  @NotNull
  email: string;

  @Column({ defaultValue: false })
  is_admin: boolean;
}
