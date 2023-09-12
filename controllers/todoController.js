const { Todo } = require("../models");

exports.index = (req, res) => {
  Todo.findAll().then((todo) => {
    res.send({
      status: "Success",
      message: "Success",
      data: todo,
    });
  });
};

exports.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    is_active: req.body.is_active,
    priority: req.body.priority,
    activitiy_groups_id: req.body.activitiy_groups_id,
  }).then((todo) => {
    res.send({
      status: "Success",
      message: "Success",
      data: todo,
    });
  });
};

exports.show = (req, res) => {
  Todo.findByPk(req.params.id).then((todo) => {
    res.send({
      status: "Success",
      message: "Success",
      data: todo,
    });
  });
};

exports.update = (req, res) => {
  Todo.update(req.body, { where: { id: req.params.id } }).then((todo) => {
    res.send({
      status: "Success",
      message: "Success",
      data: todo,
    });
  });
};

exports.delete = (req, res) => {
  Todo.destroy({ where: { id: req.params.id } }).then((todo) => {
    res.send({
      status: "Success",
      message: "Success",
      data: todo,
    });
  });
};
