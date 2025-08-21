const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, createTask, updateTaskById } = require('../controllers/task-controller');

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTaskById);

module.exports = router;