const express = require("express");

const {
  shortenURL,
  redirectURL,
} = require("../controllers/linkController");

const router = express.Router();

router.post("/shorten", shortenURL);

router.get("/:shortCode", redirectURL);

module.exports = router;