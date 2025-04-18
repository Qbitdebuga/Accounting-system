import { Response } from 'express';
import { JournalEntryService } from '../services/journal.service';
import { CustomRequest } from '../types/CustomRequest'; // ✅ important

export const postJournal = async (req: CustomRequest, res: Response) => {
  try {
    const company_id = req.user?.company_id;
    const journal = await JournalEntryService.postJournal({ ...req.body, company_id });
    res.status(201).json(journal);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getJournals = async (req: CustomRequest, res: Response) => {
  const company_id = req.user?.company_id;

  if (!company_id) {
    return res.status(403).json({ error: 'Missing company_id from user token' });
  }

  try {
    const journals = await JournalEntryService.getAllByCompany(company_id);
    res.status(200).json(journals);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
