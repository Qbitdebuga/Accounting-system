import express from 'express';
import { getJournals, postJournal } from '../controllers/journal.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authenticate, postJournal);
router.get('/', authenticate, getJournals);

export default router;
