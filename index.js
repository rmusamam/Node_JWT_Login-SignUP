const {app} = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DB_CONNECTION.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected"));

app.listen(port, () => {
  console.log(`server active on ${port}`);
});
