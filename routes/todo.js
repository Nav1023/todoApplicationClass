const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');

router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);
router.get('/', todoController.fetchList);
router.get('/:id', todoController.fetchTask);
router.patch('/:id', todoController.changeStatus);

module.exports = router;
