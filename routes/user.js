"use strict";

module.exports = function (app) {
  const UserController = require("../controllers/user");
  const UserVerification = require("../middleware/verifikasi-user");

  // ACCOUNT CONTROLLER
  app.route(`/api/user/register`)
    .post(UserController.account_controller.register);

  app.route(`/api/user/login`)
    .post(UserController.account_controller.login);

  // TODO CONTROLLER
  app.route(`/api/user/todos`)
    .get(UserController.todo_controller.getTodos);

  app.route(`/api/user/todos/:id_todo`)
    .get(UserController.todo_controller.getTodosId);

  app.route(`/api/user/todos`)
    .post(UserController.todo_controller.addTodos);

  app.route(`/api/user/todos/:id_todo`)
    .put(UserController.todo_controller.editTodos);

  app.route(`/api/user/todos/:id_todo`)
    .delete(UserController.todo_controller.deleteTodos);
};
