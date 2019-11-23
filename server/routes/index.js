const express = require("express");
const router = express.Router();


router.get("/shows", (req, res) => {
  res.end('we made it!');
});

module.exports = router;