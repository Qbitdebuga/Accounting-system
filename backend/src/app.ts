import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './config/database';
import companyRoutes from './routes/company.routes';
import { User } from './models/user';
import { Role } from './models/role';
import authRoutes from './routes/auth.routes';
import { Account } from './models/account';
import { JournalEntry } from './models/journal_entry';
import { JournalLine } from './models/journal_line';
import journalRoutes from './routes/journal.routes';
import reportRoutes from './routes/report.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/journals', journalRoutes);
app.use('/api/reports', reportRoutes);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.send('📘 Accounting API is running...');
});

// Register routes
app.use('/api/companies', companyRoutes);

// ✅ Database connection and sync logging
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connected to database');
    return sequelize.sync(); // or sync({ alter: true })
  })
  .then(() => {
    console.log('✅ Models synchronized');
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

