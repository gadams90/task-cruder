// Express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const taskRoutes = require('./routes/task-routes');

app.use(express.json());
app.use('/tasks', taskRoutes); // Use Task routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`); // Confirm server is listening
});
