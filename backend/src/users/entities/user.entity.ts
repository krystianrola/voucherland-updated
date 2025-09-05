import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

export interface UserCreationAttr {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  is_admin: boolean;
}

@Table
export class User extends Model<User, UserCreationAttr> {
  @AllowNull(false)
  @Column
  firstname: string;

  @Column
  lastname: string;

  @AllowNull(false)
  @Column
  email: string;

  @Column
  password: string;

  @AllowNull(false)
  @Column({ defaultValue: false })
  is_admin: boolean;
}
