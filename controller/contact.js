const express = require("express");
const router = express.Router();
const contacts = require("../model/Contact");

//url = /api
router.get("/", function (req, res) {
  res.json({ status: 200, payload: "api ready" });
});

//url = /api/contacts
router.get("/contacts", function (req, res) {
  contacts.getAll(req, res);
});

//url = /api/contact/list-contact
router.post("/contacts", function (req, res) {
  contacts.add(req, res);
});

module.exports = router;
