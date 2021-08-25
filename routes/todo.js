const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');

router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);
router.get('/', todoController.fetchList);

module.exports = router;
