const express = require("express");
const app = express();


app.listen(3001, () => {
  console.log("Successfully connected on port 3001");
});


app.get("/", (req, res) => {
  res.send("<h2>Welcome to Home Page</h2>")
  //http://localhost:3001
});


app.get("/about", (req, res) => {
  res.redirect('..');
  //http://localhost:3001/about
});

app.get("/download", (req, res) => {
  res.download("./files/6th-Internship Report Kashifa.pdf");
  //http://localhost:3001/user
});


app.get("/user/:userid-:bookid", (req, res) => {
  res.send(req.params);
  //http://localhost:3001/user/rj-52
});


app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Search result for, name : ${name}, Age : ${age}`);
  //http://localhost:3001/search?name=Kashifa&age=18
});


app.get("/student", (req, res) => {
  const students = [
    { id: 1, name: "Kashifa", age: 18 },
    { id: 2, name: "Madiha", age: 19 }
  ];
  res.jsonp(students);
  //http://localhost:3001/student
});
