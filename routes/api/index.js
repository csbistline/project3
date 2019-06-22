const router = require("express").Router();
const partRoutes = require("./parts");
const techRoutes = require("./techs");


// Tech routes
router.use("/techs", techRoutes);
router.use("/parts", partRoutes);

module.exports = router;
