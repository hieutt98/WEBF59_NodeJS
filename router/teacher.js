const express = require("express");
const teacherRouter = express.Router();

const teachers = [
  {
    id: 1,
    name: "Tuan",
    job: "teacher",
  },
  {
    id: 2,
    name: "Minh",
    job: "teacher",
  },
  {
    id: 3,
    name: "Vu",
    job: "teacher",
  },
];

teacherRouter.get("", (req, res) => {
  res.json(teachers);
});

teacherRouter.post("", (req, res) => {
  const { id, name, job } = req.body;
  teachers.push({
    id: 'id',
    name: 'name',
    job: 'job',
  });
  res.status(201);
  res.json(teachers);
});

teacherRouter.put("", (req, res) => {
  teachers[1].name = "Khai";
  teachers[1].job = "supporter";
  res.json(teachers);
});

teacherRouter.delete("", (req, res) => {
  teachers.pop();
  res.json(teachers);
});

module.exports = teacherRouter;
