import { Request, Response } from 'express';
import { getUserFromRequest } from '../utils/getUserFromRequest';

export const createVoucher = async (req: Request, res: Response) => {
  try {
    const { id, company_id } = getUserFromRequest(req);

    // Now you can safely use id, company_id, role_id, etc.
    // continue with your logic...
    return res.json({ ok: true });
  } catch (error: any) {
    return res.status(403).json({ error: error.message });
  }
};
