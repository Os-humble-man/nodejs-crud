const express = require("express");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_blog_db",
});

app.post("inscription", (req, res) => {
  const sql =
    "INSERT INTO users (user_name,user_mail, user_profession, user_password, user_genre, user_date) VALUES (?,?,?,?,?,?)";
  con.query(
    sql,
    [
      (req.body.user_name = user_name),
      (req.body.user_mail = user_mail),
      (req.body.user_profession = user_profession),
      (req.body.user_password = user_password),
      (req.body.user_genre = user_genre),
      // (req.body.user_date = user_date),
    ],
    (res, req) => {
      console.log(res);
      console.log(req);
    }
  );
});

app.use((req, res, next) => {
  res.send("Welcome to Express");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
