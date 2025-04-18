import { Request, Response } from 'express';
import { CompanyService } from '../services/company.service';

export const getAllCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await CompanyService.getAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
};

export const createCompany = async (req: Request, res: Response) => {
  const { name, default_currency, timezone, is_active } = req.body;

  if (!name || !default_currency || !timezone || is_active === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newCompany = await CompanyService.create({ name, default_currency, timezone, is_active });
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create company' });
  }
};
