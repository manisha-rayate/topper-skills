const express = require("express");
const UserCtrl = require("../controllers/user.controller");
const router = express.Router();

router.post('/', UserCtrl.create);
router.put('/:id', UserCtrl.update);
router.delete('/:id', UserCtrl.delete);
router.get('/', UserCtrl.getUsers);
router.get('/:id', UserCtrl.getUser);
router.post('/auth', UserCtrl.authenticate);

module.exports = router;
