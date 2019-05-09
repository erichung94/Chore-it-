const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/groups"
router.route("/groups")
  .get(groupsController.findAll)
  .post(groupsController.create);

// Matches with "/api/groups/:id"
router
  .route("/groups/:id")
  .get(groupsController.findById)
  .put(groupsController.update)
  .delete(groupsController.remove);

module.exports = router;
