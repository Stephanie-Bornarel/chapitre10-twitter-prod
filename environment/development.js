const path = require("path");

module.exports = {
  dbUrl:
    "mongodb+srv://stef:qwe@cluster0.yckcaeb.mongodb.net/twitter?retryWrites=true",

  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
};
