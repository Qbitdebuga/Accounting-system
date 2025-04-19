import { Router } from 'express';
import { createVoucher } from '../controllers/voucher.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, createVoucher);

export default router;
