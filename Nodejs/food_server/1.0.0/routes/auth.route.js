const express = require('express');
const router = express.Router();

router.post("/", require('../controllers/auth.controller'));

module.exports = router;