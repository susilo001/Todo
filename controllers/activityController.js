const { Activity } = require("../models");

exports.index = (req, res) => {
  Activity.findAll().then((activity) => {
    res.send({
      status: "Success",
      message: "Success",
      data: activity,
    });
  });
};

exports.create = (req, res) => {
  Activity.create({
    title: req.body.title,
    email: req.body.email,
  }).then((activity) => {
    res.send({
      status: "Success",
      message: "Success",
      data: activity,
    });
  });
};

exports.show = (req, res) => {
  Activity.findByPk(req.params.id).then((activity) => {
    res.send({
      status: "Success",
      message: "Success",
      data: activity,
    });
  });
};

exports.update = (req, res) => {
  Activity.update(req.body, { where: { id: req.params.id } }).then(
    (activity) => {
      res.send({
        status: "Success",
        message: "Success",
        data: activity,
      });
    }
  );
};

exports.delete = (req, res) => {
  Activity.destroy({ where: { id: req.params.id } }).then((activity) => {
    res.send({
      status: "Success",
      message: "Success",
      data: activity,
    });
  });
};
