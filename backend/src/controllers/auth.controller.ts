import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });

  try {
    const { token, user } = await AuthService.login(email, password);
    res.status(200).json({ token, user: { id: user.id, email: user.email, role_id: user.role_id } });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
