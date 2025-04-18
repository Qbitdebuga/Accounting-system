import { sequelize } from '../config/database';
import { QueryTypes } from 'sequelize';

export class ReportService {
  static async getTrialBalance(company_id: number, from?: string, to?: string) {
    let whereClause = `WHERE je.company_id = :company_id`;

    if (from) whereClause += ` AND je.posting_date >= :from`;
    if (to) whereClause += ` AND je.posting_date <= :to`;

    const query = `
      SELECT 
        a.id as account_id,
        a.name as account_name,
        a.type,
        COALESCE(SUM(jl.debit), 0) AS debit,
        COALESCE(SUM(jl.credit), 0) AS credit,
        COALESCE(SUM(jl.debit) - SUM(jl.credit), 0) AS balance
      FROM accounts a
      LEFT JOIN journal_lines jl ON jl.account_id = a.id
      LEFT JOIN journal_entries je ON je.id = jl.journal_entry_id
      ${whereClause}
      GROUP BY a.id, a.name, a.type
      ORDER BY a.code ASC
    `;

    const results = await sequelize.query(query, {
        replacements: { company_id, from, to },
        type: QueryTypes.SELECT,
    });
      

    return results;
  }
}
