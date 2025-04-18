import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface AccountAttributes {
  id?: number;
  company_id: number;
  code: string;
  name: string;
  type: string;
  normal_balance: string;
  parent_account_id?: number | null;
  is_active: boolean;
  currency_code: string;
}

type AccountCreationAttributes = Optional<AccountAttributes, 'id'>;

export class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
  public id!: number;
  public company_id!: number;
  public code!: string;
  public name!: string;
  public type!: string;
  public normal_balance!: string;
  public parent_account_id!: number | null;
  public is_active!: boolean;
  public currency_code!: string;
}

Account.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company_id: { type: DataTypes.INTEGER, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    normal_balance: { type: DataTypes.STRING, allowNull: false },
    parent_account_id: { type: DataTypes.INTEGER, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, allowNull: false },
    currency_code: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: 'accounts',
    modelName: 'Account',
    timestamps: false,
  }
);
