import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface JournalLineAttributes {
  id?: number;
  journal_entry_id: number;
  account_id: number;
  debit: number;
  credit: number;
  tax_id?: number | null;
  entity_type?: string;
  entity_id?: number;
}

type JournalLineCreationAttributes = Optional<JournalLineAttributes, 'id'>;

export class JournalLine extends Model<JournalLineAttributes, JournalLineCreationAttributes> implements JournalLineAttributes {
  public id!: number;
  public journal_entry_id!: number;
  public account_id!: number;
  public debit!: number;
  public credit!: number;
  public tax_id!: number | null;
  public entity_type?: string;
  public entity_id?: number;
}

JournalLine.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    journal_entry_id: { type: DataTypes.INTEGER, allowNull: false },
    account_id: { type: DataTypes.INTEGER, allowNull: false },
    debit: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    credit: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    tax_id: { type: DataTypes.INTEGER, allowNull: true },
    entity_type: { type: DataTypes.STRING, allowNull: true },
    entity_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    sequelize,
    tableName: 'journal_lines',
    modelName: 'JournalLine',
    timestamps: false,
  }
);
