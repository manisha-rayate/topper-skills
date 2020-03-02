const express = require("express");
const multer = require('multer');
const path = require('path');
const DishCtrl = require("../controllers/dish.controller");
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +  path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

// http://localhost:8888/images/avatar-1582948287720.jpeg

router.post('/', upload.single('avatar'), DishCtrl.create);
router.put('/:id', DishCtrl.update);
router.delete('/:id', DishCtrl.delete);
router.get('/', DishCtrl.getDishes);
router.get('/:id', DishCtrl.getUser);
router.post('/auth', DishCtrl.authenticate);

module.exports = router;
