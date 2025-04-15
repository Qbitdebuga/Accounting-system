import express from 'express';
import JournalService from '../../services/AccountingService';

const router = express.Router();

// POST /api/journal-entries
router.post('/', async (req, res) => {
  try {
    const entry = await JournalService.createJournalEntry(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;