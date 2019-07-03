const router = require("express").Router();
const partRoutes = require("./parts");
const techRoutes = require("./techs");
const loginRoutes = require("./login");


// Tech routes
router.use("/techs", techRoutes);
router.use("/parts", partRoutes);
router.use("/login", loginRoutes);

module.exports = router;
