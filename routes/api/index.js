const router = require("express").Router();
const bookRoutes = require("./books");
const techRoutes = require("./techs");


// Tech routes
router.use("/techs", techRoutes);

module.exports = router;
