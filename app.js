// Import dependencies
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Define Express application
const app = express();
const port = process.env.APP_PORT || 3000;

// Controllers
const todoController = require("./controllers/todoController");
const activityController = require("./controllers/activityController");

// Middleware
app.use(express.json());

// Routes home
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Todo Routes
app.route("/todo-items").get(todoController.index).post(todoController.create);

app
  .route("/todo-items/:id")
  .get(todoController.show)
  .put(todoController.update)
  .delete(todoController.delete);

// Activity Routes
app
  .route("/activity-groups")
  .get(activityController.index)
  .post(activityController.create);

app
  .route("/activity-groups/:id")
  .get(activityController.show)
  .put(activityController.update)
  .delete(activityController.delete);

// Start the server after authenticating the database connection
app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
