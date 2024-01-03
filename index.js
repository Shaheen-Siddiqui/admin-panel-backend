const express = require("express");
require("./dbConnection");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const product = require("./routes/product");


// // serve up production assets
// app.use(express.static('../client/dist'));

// // serve up the index.html if express does'nt recognize the route
// const path = require('path');

// app.get('/home/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
// });

app.use(cors());

app.use(express.json());
app.use("/", user);
app.use("/product", product);

// respond with "hello world" when a GET request is made to the homepage;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3005, () => console.log("server is running on port 3005"));
