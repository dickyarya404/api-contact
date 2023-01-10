const db = require("../config/db");

exports.getAll = (req, res) => {
  const sqlQuery = "SELECT * FROM contact";
  db.query(sqlQuery, function (err, results) {
    res.json({ status: 200, payload: results });
  });
};

exports.add = (req, res) => {
  const sqlQuery = `INSERT INTO contact SET fullname = '${req.body.fullname}', phone = '${req.body.phone}', note = '${req.body.note}'`;
  db.query(sqlQuery, function (err, results) {
    res.json({ status: 200, payload: results });
  });
};
