const express = require('express');
const UserCtrl = require('../controllers/user.controller');
const router = express.Router();

router.post('/', UserCtrl.create);
router.get('/', UserCtrl.getUsers);
router.get('/:id', UserCtrl.getUser);

module.exports = router;