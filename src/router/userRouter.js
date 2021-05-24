const express = require('express')
const multer = require('multer')
const UserController = require('../controller/userController');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});


const fileFilter = (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
       return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
};


const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
 limit:{
 fieldSize: 1*1024*1024 //1 MB
 }
});


router.post('/single-image-upload', upload.single('upload'), UserController.singleImageUpload);
router.post('/multiple-image-upload', upload.array('upload'), UserController.multipleImageUpload);


module.exports = router;