import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from '../types/CustomRequest';

const DISABLE_AUTH = process.env.DISABLE_AUTH === 'true';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const customReq = req as CustomRequest;

  if (DISABLE_AUTH) {
    customReq.user = {
      id: 1,
      role_id: 1,
      company_id: 1,
      email: 'dev@dev.local'
    };
    return next();
  }

  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
    // 👇 Replace this with real JWT decoding when re-enabling
    const decoded = {
      id: 1,
      company_id: 1,
      role_id: 1,
      email: 'admin@example.com'
    };

    customReq.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
