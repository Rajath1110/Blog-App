// api/routes/user.routes.js

import express from 'express';
import { test } from '../controllers/user.controller.js'; // Note the .js extension

const router = express.Router();

router.get('/test', test);

export default router;
