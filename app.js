const express = require("express");
const route = require("./Route/account.js");
const bodyParser = require("body-parser");
const check = require("./Middleware/checkToken");
const {verifyToken} = require("./Middleware/verifyToken");

const app = express();

app.use(bodyParser.json());

//MiddleWare use
app.use(bodyParser.json());
app.use(check.checkToken,verifyToken);
app.use("/", route);

module.exports={app}
