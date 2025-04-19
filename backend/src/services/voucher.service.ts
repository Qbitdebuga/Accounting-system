import { sequelize } from '../config/database';
import { Voucher } from '../models/voucher';
import { VoucherLine } from '../models/voucher_line';
import { JournalEntry } from '../models/journal_entry';
import { JournalLine } from '../models/journal_line';

export class VoucherService {
  static async createVoucher(data: any) {
    const { type, date, reference, lines, company_id, approved_by } = data;

    const result = await sequelize.transaction(async (t) => {
      // Create the voucher
      const voucher = await Voucher.create({
        type,
        date,
        reference,
        status: 'approved',
        approved_by,
        approved_at: new Date()
      }, { transaction: t });

      // Create voucher lines
      const linesWithId = lines.map((line: any) => ({
        ...line,
        voucher_id: voucher.id
      }));
      await VoucherLine.bulkCreate(linesWithId, { transaction: t });

      // Create journal entry
      const journal = await JournalEntry.create({
        company_id,
        transaction_date: date,
        posting_date: date,
        description: `Voucher ${reference}`,
        is_adjusting_entry: false,
        voucher_id: voucher.id
      }, { transaction: t });

      // Create journal lines from voucher lines
      const journalLines = linesWithId.map((line: any) => ({
        journal_entry_id: journal.id,
        account_id: line.account_id,
        debit: line.debit,
        credit: line.credit,
        entity_type: line.entity_type,
        entity_id: line.entity_id
      }));
      await JournalLine.bulkCreate(journalLines, { transaction: t });

      return { voucher, journal };
    });

    return result;
  }
}
