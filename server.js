const express = require('express');
const multer = require('multer')
const app = express();
const path =  require('path')
// Multer storage options
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
      cb(null, file.originalname + '-' + Date.now() + ext);
    }
  });
  
  var upload = multer({ storage: storage });
const PORT = 3000 || process.env.PORT


app.post('/single-image-upload', upload.single('photo'), async (req, res) =>{
    const image = req.file
    if(image) {
        res.status(200).send({
            status: 200,
            message: 'Image Uploaded'
        })
    }
})

app.post('/multiple-image-upload', upload.array('photos',12), async (req, res) =>{
    const image = req.files
    if(image) {
        res.status(200).send({
            status: 200,
            message: 'Image Uploaded'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is up ${PORT}` )
}) 