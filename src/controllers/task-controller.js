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

module.exports = { getAllTasks, getTaskById }