const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const apiRoute = require("./routes/api");

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database");
});

app.use("/api", apiRoute);
app.get("*", (req, res) => {
  res.send("This route does not exist!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
