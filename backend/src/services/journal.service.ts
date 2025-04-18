import { sequelize } from '../config/database';
import { JournalEntry } from '../models/journal_entry';
import { JournalLine } from '../models/journal_line';

interface Line {
  account_id: number;
  debit: number;
  credit: number;
  tax_id?: number;
  entity_type?: string;
  entity_id?: number;
}

interface JournalInput {
  transaction_date: string;
  posting_date: string;
  description: string;
  is_adjusting_entry: boolean;
  lines: Line[];
  company_id: number;
}

export class JournalEntryService {
  static async postJournal(data: JournalInput) {
    const { transaction_date, posting_date, description, is_adjusting_entry, lines, company_id } = data;

    // 1. Validate entry is balanced
    const totalDebit = lines.reduce((sum, l) => sum + parseFloat(l.debit as any || 0), 0);
    const totalCredit = lines.reduce((sum, l) => sum + parseFloat(l.credit as any || 0), 0);

    if (totalDebit !== totalCredit) {
      throw new Error('Journal entry is not balanced: Debits do not equal Credits');
    }

    // 2. Save journal + lines inside transaction
    const result = await sequelize.transaction(async (t) => {
      const journal = await JournalEntry.create(
        {
            company_id,
            transaction_date: new Date(transaction_date),
            posting_date: new Date(posting_date),
            description,
            is_adjusting_entry
        },
        { transaction: t }
      );

      const linesWithId = lines.map(line => ({
        ...line,
        journal_entry_id: journal.id,
      }));

      await JournalLine.bulkCreate(linesWithId, { transaction: t });

      return journal;
    });

    return result;
  }
  
  static async getAllByCompany(company_id: number) {
    return await JournalEntry.findAll({
      where: { company_id },
      order: [['posting_date', 'DESC']],
      include: [
        {
          model: JournalLine,
          as: 'lines'
        }
      ]
    });
  }
  
}
