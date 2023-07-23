const express = require("express");
const router = express.Router();
const {guides} = require("../json/guides")

router.get("/", async(req,res) => {
  res.json(guides);
})

module.exports = router;