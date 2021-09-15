var Userdb = require("../model/model");

//create and save new user
exports.create = (req, res) => {
  //validate request
  // if (!req.body) {
  //   res.status(400).send({ message: "Content can not be empty" });
  //   return;
  // }
  //new user
  // const user = new Userdb({
  //   fullName: req.body.fullName,
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  //save user in the db
  // user
  //   .save(user)
  //   .then((data) => {
  //   res.send(data);
  //   res.redirect("/add-user");
  // })
  // .catch((err) => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occured while creating a create operation",
  //   });
  // });
};

//retrieve and return all user/ retrieve and return single user
// exports.find = (req, res) => {
//   if (req.query.id) {
//     const id = req.query.id;
//     Userdb.findById(id)
//       .then((data) => {
//         if (!data) {
//           res.status(404).send({ message: `Not FOund User with id ${id}` });
//         } else {
//           res.send(data);
//         }
//       })
//       .catch((err) => {
//         res
//           .status(500)
//           .send({ message: `Error reteriving user with id ${id}` });
//       });
//   } else {
//     Userdb.find()
//       .then((user) => {
//         res.send(user);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: err.message || "Error Occured while retriving user info",
//         });
//       });
//   }
// };

//Update a new identified user by id
// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({ message: "Data to update can not be empty" });
//   }

//   const id = req.params.id;
//   Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update user with ${id}. Maybe user not found`,
//         });
//       } else {
//         res.send(data);
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error update user information" });
//     });
// };

//Deleet a user with speficied user id in request
// exports.delete = (req, res) => {
//   const id = req.params.id;
//   Userdb.findByIdAndDelete(id)
//     .then((data) => {
//       if (!data) {
//         res
//           .status(404)
//           .send({ message: `Cannot delte with id ${id}. Maybe id is wrong` });
//       } else {
//         res.send({
//           message: "User was deleted successfully",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: `Cound not delete User with id ${id}` });
//     });
// };
