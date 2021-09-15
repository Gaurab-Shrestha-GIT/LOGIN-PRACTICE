const Userdb = require("../model/model");
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { fullName: "", email: "", password: "" };

  //incorrect email
  if (err.message === "Incorrect Email") {
    errors.email = "That email is not registered.";
  }

  //incorrect password
  if (err.message === "Incorrect Password") {
    errors.password = "That password is incorrect.";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  //validation errors
  if (err.message.includes("userdb validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "gaurab bibhav", {
    expiresIn: maxAge,
  });
};

exports.homeRoutes = (req, res) => {
  res.render("index");
  //make a get request to /api/users
  // axios
  //   .get("http://localhost:3000/api/users")
  //   .then(function (response) {
  //     res.render("index", { users: response.data });
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
};

exports.login_get = (req, res) => {
  res.render("login");
};
exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Userdb.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

exports.sign_up_get = (req, res) => {
  res.render("signup");
};
exports.sign_up_post = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const user = await Userdb.create({ fullName, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
    s;
  }
};

exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
