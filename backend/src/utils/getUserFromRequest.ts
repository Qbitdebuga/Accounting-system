import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthUser extends JwtPayload {
  id: number;
  role_id: number;
  company_id: number;
  email?: string;
}

export function getUserFromRequest(req: Request): AuthUser {
  const user = (req as any).user;
  if (!user || !user.id || !user.company_id || !user.role_id) {
    throw new Error('Invalid or missing user on request');
  }

  return user as AuthUser;
}
