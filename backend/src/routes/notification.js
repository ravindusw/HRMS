import { Router } from 'express';

const router = Router();

router.get('/notification', (req, res) => {
    res.send('<h1>This is notification page<h1>');
    console.log('Notification page is running...');
});



export default router;