const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post(
  "/",
  controller.dashboard
);
router.post(
  "/me",
  controller.me
);

module.exports = router;
