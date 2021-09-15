const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const connectDB = require("./server/database/connection");
const { checkUser } = require("./server/middleware/authmiddleware");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//mongoDB connection
connectDB();

app.use(express.json());
app.use(cookieParser());

//set view engine
app.set("view engine", "ejs");

//app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use("*", checkUser);
app.use("/", require("./server/routes/router"));

//cookies
app.get("/set-cookies", (req, res) => {
  //res.setHeader("Set-Cookie", "newUser=true");

  res.cookie("newUser", false);
  res.cookie("isEmployee", true, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
  res.send("you got the cookies!");
});

app.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);

  res.json(cookies);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
