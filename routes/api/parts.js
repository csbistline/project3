const router = require("express").Router();
const partsController = require("../../controllers/partsController");

// Matches with "/api/techs"
router.route("/")
    .get(partsController.findAll)
    .post(partsController.create);

// Matches with "/api/techs/:id"
router
    .route("/:id")
    .get(partsController.findById)
    .put(partsController.update)
    .delete(partsController.remove);

router
    .route("/:id&/:status")
    .get(partsController.findById)
    .put(partsController.update)
    .delete(partsController.remove);

module.exports = router;
