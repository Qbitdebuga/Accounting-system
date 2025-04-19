import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface VoucherAttributes {
  id: number;
  type: 'payment' | 'receipt' | 'journal';
  date: Date;
  reference: string;
  status: 'draft' | 'approved' | 'paid';
  approved_by?: number;
  approved_at?: Date;
}

interface VoucherCreationAttributes extends Optional<VoucherAttributes, 'id' | 'approved_by' | 'approved_at'> {}

export class Voucher extends Model<VoucherAttributes, VoucherCreationAttributes> implements VoucherAttributes {
  public id!: number;
  public type!: 'payment' | 'receipt' | 'journal';
  public date!: Date;
  public reference!: string;
  public status!: 'draft' | 'approved' | 'paid';
  public approved_by?: number;
  public approved_at?: Date;
}

Voucher.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.ENUM('payment', 'receipt', 'journal'), allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    reference: { type: DataTypes.STRING, unique: true },
    status: { type: DataTypes.ENUM('draft', 'approved', 'paid'), defaultValue: 'draft' },
    approved_by: { type: DataTypes.INTEGER },
    approved_at: { type: DataTypes.DATE }
  },
  {
    sequelize,
    tableName: 'vouchers',
    timestamps: true
  }
);
