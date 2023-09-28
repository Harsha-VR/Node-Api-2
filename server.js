require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMidleware");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 7000;

var corsOptions = {
  origin: "",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.get("/", (req, res) => {
  // throw new Error('fake error')ssss
  res.send("hellow Node Api");
});

app.get("/blog", (req, res) => {
  res.send("hellow blog");
});

app.use("/api/products", productRoute);

app.use(errorMiddleware);
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("mongoo db connected");
    app.listen(PORT, () => {
      console.log(`Node api app started at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
