import express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
  res.end("Hello, world");
});

export default router;
