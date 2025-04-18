import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
  
    // DEBUG: check if user was found
    console.log('🔍 Found user:', user?.email, 'Hashed password:', user?.password);
  
    if (!user) throw new Error('Invalid credentials');
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    // DEBUG: check password match result
    console.log('🔐 Password match:', isMatch);
  
    if (!isMatch) throw new Error('Invalid credentials');
  
    const token = jwt.sign(
      { id: user.id, role_id: user.role_id, company_id: user.company_id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );
  
    return { token, user };
  }

  static async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}