var express = require('express');
var router = express.Router();
 
const AuthController = require("../controllers/AuthController");

router.get("/", AuthController.createPost);
router.post("/", AuthController.store);

module.exports = router;