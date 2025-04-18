import express from 'express';
import { getAllCompanies, createCompany } from '../controllers/company.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authenticate, getAllCompanies);
router.post('/', authenticate, createCompany);

export default router;