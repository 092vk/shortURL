import express from 'express';
import {handleGenerateNewShortUrl , handleAnalytics} from '../controllers/controller.js';

const router = express.Router();

router.post('/',handleGenerateNewShortUrl);

router.get('/analytics',handleAnalytics);

export default router;


