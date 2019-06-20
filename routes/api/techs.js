const router = require("express").Router();
const techsController = require("../../controllers/techsController");

// Matches with "/api/techs"
router.route("/")
    .get(techsController.findAll)
    .post(techsController.create);

// Matches with "/api/techs/:id"
router
    .route("/:id")
    .get(techsController.findById)
    .put(techsController.update)
    .delete(techsController.remove);

module.exports = router;
