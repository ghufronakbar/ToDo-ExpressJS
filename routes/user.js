"use strict";

module.exports = function (app) {
  const UserController = require("../controllers/user");
  const UserVerification = require("../middleware/verifikasi-user");

  // ACCOUNT CONTROLLER
  app.route(`/api/user/register`)
    .post(UserController.account_controller.register);

  app.route(`/api/user/login`)
    .post(UserVerification, UserController.account_controller.login);

  // TODO CONTROLLER
  app.route(`/api/user/todos`)
    .get(UserVerification, UserController.todo_controller.getTodos);

  app.route(`/api/user/todos/:id_todo`)
    .get(UserVerification, UserController.todo_controller.getTodosId);

  app.route(`/api/user/todos`)
    .post(UserVerification, UserController.todo_controller.addTodos);

  app.route(`/api/user/todos/:id_todo`)
    .put(UserVerification, UserController.todo_controller.editTodos);

  app.route(`/api/user/todos/:id_todo`)
    .delete(UserVerification, UserController.todo_controller.deleteTodos);
};
