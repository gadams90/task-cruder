const pool = require('../db');

/**
 * Get all tasks
 * @param {*} req express request
 * @param {*} res express response
 */
async function getAllTasks (req, res) {
  try {
    const client = await pool.connect();
    const allTasks = await client.query('SELECT * FROM tasks');
    client.release();
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Get specified task by id
 * @param {*} req express request
 * @param {*} res express response
 */
async function getTaskById (req, res) {
  const { id } = req.params;
  try {
    const task = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    res.json(task.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Create a new task
 * @param {*} req express request
 * @param {*} res express response
 */
async function createTask (req, res) {
  const { name, details } = req.body;
  try {
    const newTask = await pool.query('INSERT INTO tasks (name, details) VALUES ($1, $2) RETURNING *', [name, details]);
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Update specified task by id
 * @param {*} req express request
 * @param {*} res express response
 */
 async function updateTaskById (req, res) {
  const { id } = req.params;
  const { name, details } = req.body;
  try {
    await pool.query('UPDATE tasks SET name = $1, details = $2 WHERE id = $3', [name, details, id]);
    res.json('task updated successfully');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTaskById }