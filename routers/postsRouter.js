const express = require("express");
const postValidationId = require("../middlewares/paramsValidationId.js");
const postController = require("../controllers/postController.js");

const router = express.Router();

// Index
router.get("/", postController.index);

// Show
router.get("/:id", postController.show);

// Store
router.post("/", postController.store);

// Update
router.put("/:id", postController.update);

// Modify
router.patch("/:id", postController.modify);

// Destroy
router.delete("/:id", postController.destroy);

module.exports = router;
