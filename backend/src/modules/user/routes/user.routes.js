const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get('/', userController.getUsers);

module.exports = router;
