import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface VoucherLineAttributes {
  id: number;
  voucher_id: number;
  account_id: number;
  debit: number;
  credit: number;
  description?: string;
  entity_type?: 'supplier' | 'customer' | 'employee';
  entity_id?: number;
}

interface VoucherLineCreationAttributes extends Optional<VoucherLineAttributes, 'id'> {}

export class VoucherLine extends Model<VoucherLineAttributes, VoucherLineCreationAttributes> implements VoucherLineAttributes {
  public id!: number;
  public voucher_id!: number;
  public account_id!: number;
  public debit!: number;
  public credit!: number;
  public description?: string;
  public entity_type?: 'supplier' | 'customer' | 'employee';
  public entity_id?: number;
}

VoucherLine.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    voucher_id: { type: DataTypes.INTEGER, allowNull: false },
    account_id: { type: DataTypes.INTEGER, allowNull: false },
    debit: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    credit: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    description: { type: DataTypes.STRING },
    entity_type: { type: DataTypes.ENUM('supplier', 'customer', 'employee') },
    entity_id: { type: DataTypes.INTEGER }
  },
  {
    sequelize,
    tableName: 'voucher_lines',
    timestamps: true
  }
);
