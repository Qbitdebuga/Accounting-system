export default class AccountingService {
    static async createJournalEntry(entryData) {
      // Validate double-entry balance
      const totalDebit = entryData.lines.reduce((sum, line) => sum + line.debit, 0);
      const totalCredit = entryData.lines.reduce((sum, line) => sum + line.credit, 0);
      
      if (totalDebit !== totalCredit) {
        throw new Error('Debits and credits must balance');
      }
  
      return sequelize.transaction(async t => {
        const journalEntry = await JournalEntry.create(entryData, { transaction: t });
        await JournalLine.bulkCreate(entryData.lines, { transaction: t });
        return journalEntry;
      });
    }
  }