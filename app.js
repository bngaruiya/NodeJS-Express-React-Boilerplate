const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Njau" },
    { id: 2, firstName: "Jane", lastName: "Wanjiru" },
    { id: 3, firstName: "Steve", lastName: "Kimani" },
  ];

  res.json(customers);
});

module.exports = app;
