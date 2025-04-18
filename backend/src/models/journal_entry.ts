import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { JournalLine } from './journal_line';


interface JournalEntryAttributes {
  id?: number;
  company_id: number;
  voucher_id?: number | null;
  transaction_date: Date;
  posting_date: Date;
  description: string;
  is_adjusting_entry: boolean;
}

type JournalEntryCreationAttributes = Optional<JournalEntryAttributes, 'id'>;

export class JournalEntry extends Model<JournalEntryAttributes, JournalEntryCreationAttributes> implements JournalEntryAttributes {
  public id!: number;
  public company_id!: number;
  public voucher_id!: number | null;
  public transaction_date!: Date;
  public posting_date!: Date;
  public description!: string;
  public is_adjusting_entry!: boolean;
}

JournalEntry.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company_id: { type: DataTypes.INTEGER, allowNull: false },
    voucher_id: { type: DataTypes.INTEGER, allowNull: true },
    transaction_date: { type: DataTypes.DATEONLY, allowNull: false },
    posting_date: { type: DataTypes.DATEONLY, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    is_adjusting_entry: { type: DataTypes.BOOLEAN, allowNull: false },
  },
  {
    sequelize,
    modelName: 'JournalEntry',
    tableName: 'journal_entries',
    timestamps: false,
  }
);

JournalEntry.hasMany(JournalLine, {
    foreignKey: 'journal_entry_id',
    as: 'lines'
  });
  JournalLine.belongsTo(JournalEntry, {
    foreignKey: 'journal_entry_id'
  });
