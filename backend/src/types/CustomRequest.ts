import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: {
    id: number;
    company_id: number;
    role_id: number;
    email?: string;
  };
}
