const express = require("express");
const { connectDb } = require("./db");
const cors = require("cors");
const routes = require("./router/musicRouter");
connectDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/music", routes);

app.listen(4000, () => {
  console.log("server is running...");
});
