const express = require("express");
require("./dbConnection");
const cors = require("cors");
const app = express();
const user = require("./routes/user");
const product = require("./routes/product");

app.use(cors());

app.use(express.json());
app.use("/", user);
app.use("/product", product);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3005, () => console.log("server is running on port 3005"));
