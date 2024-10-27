import { Router } from 'express';
import { fetchJobTitles, 
    addJobTitle, 
    fetchMaxLeaveCount, 
    updateMaxLeaveCount 
} from '../controllers/configurationController.js';

const router = Router();

router.get('/fetch-job-titles', fetchJobTitles);
router.post('/add-job-title', addJobTitle);

router.get('/fetch-max-leave-count', fetchMaxLeaveCount);
router.post('/update-max-leave-count', updateMaxLeaveCount);

export default router;
