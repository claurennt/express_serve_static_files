var express = require("express");
var router = express.Router();
const display_one_post = require("../controllers/display_one_post");

router.get("/", (req, res) => res.send("Welcome!"));

router.get("/:id", display_one_post);

module.exports = router;
