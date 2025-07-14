const express = require("express");
const app = express();
// app.use("/", (req, res) => {
//   res.send("Root of the, World!");
// });
app.get("/user", (req, res) => {
  res.send({
    name: "Atul",
    age: 25,
    city: "Delhi",
  });
});
app.post("/user", (req, res) => {
  console.log("Save User Data to the Database");
  res.send("User Data Saved Successfully");
});
app.use("/test", (req, res) => {
  res.send("TESTING, World!");
});
app.use("/hello", (req, res) => {
  res.send("Hello, World!");
});
//Checking what will happen, if we did not send any response back from the server

app.get(
  "/check",
  (req, res,next) => {
    console.log("This is a check route 1 console log");
    // res.send("This is a check route 1 response");
    next(); // Call next route handler
  },
  (req, res,next) => {
    console.log("This is a check route 2 console log");
    // res.send("This is a check route 2 response");
    next(); // Call next route handler
  },
  (req, res,next) => {
    console.log("This is a check route 3 console log");
    // res.send("This is a check route 3 response");
    next();
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
