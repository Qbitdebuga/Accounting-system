import { Response } from 'express';
import { CustomRequest } from '../types/CustomRequest';
import { ReportService } from '../services/report.service';

export const getTrialBalance = async (req: CustomRequest, res: Response) => {
  const company_id = req.user?.company_id;

  const { from, to } = req.query;

  if (!company_id) {
    return res.status(403).json({ error: 'Missing company_id' });
  }

  try {
    const data = await ReportService.getTrialBalance(company_id, from as string, to as string);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
