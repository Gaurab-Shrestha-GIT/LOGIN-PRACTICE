const { Router } = require("express");
const router = Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// @description ROot route
// @method GET
router.get("/", services.homeRoutes);

// @description add-user route
// @method GET /login
router.get("/login", services.login_get);
router.post("/login", services.login_post);

// @description update-user route
// @method GET /update-user
router.get("/signup", services.sign_up_get);
router.post("/signup", services.sign_up_post);

router.get("/logout", services.logout_get);

//API
// route.post("/api/users", controller.create);

// route.get("/api/users", controller.find);
// route.put("/api/users/:id", controller.update);
// route.delete("/api/users/:id", controller.delete);

module.exports = router;
