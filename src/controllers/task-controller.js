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

module.exports = { getAllTasks }