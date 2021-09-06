const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.post('/', userController.create);
router.post('/login', userController.login);
router.post('/follow', userController.follow);

module.exports = router;
