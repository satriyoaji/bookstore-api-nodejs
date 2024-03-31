/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication
 */

import express from 'express';
import * as authController from "../controllers/AuthController";

const router = express.Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authentication successful
 *       401:
 *         description: Authentication failed
 */
router.post('', authController.auth);

export default router;
