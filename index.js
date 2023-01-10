const bodyParser = require("body-parser");
const express = require("express");
const port = 3001;
const contact = require("./controller/contact");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", contact);

app.listen(port, function () {
  console.log(`server nyala di localhost:${port}`);
});
