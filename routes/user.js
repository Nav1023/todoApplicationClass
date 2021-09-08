const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const auth = require('../middleware/auth');

router.post('/', userController.create);
router.post('/login', userController.login);
router.post('/follow', auth, userController.follow);

module.exports = router;
