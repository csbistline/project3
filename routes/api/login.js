const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login/:login"
router
    .route("/")
    .get(loginController.findByLogin);
// .put(partsController.update)
// .delete(partsController.remove);

module.exports = router;
