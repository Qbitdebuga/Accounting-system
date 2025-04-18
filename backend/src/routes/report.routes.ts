import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { getTrialBalance } from '../controllers/report.controller';

const router = express.Router();

router.get('/trial-balance', authenticate, getTrialBalance);

export default router;
