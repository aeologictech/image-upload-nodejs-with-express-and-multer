const ImageModel = require('../models/images');
const ImageService = require('../service/images')
class UserController {
        static singleImageUpload = async (req, res) => {

            if(req.body.images){
                const imageService = new ImageService()
                req.body.images = imageService.singleImageUpload('image', req.body.images)
            }
            console.log(req.body.images)
            //assign the value
            const image = new ImageModel()
            image.images = req.body.images
            //save the user
            await image.save();

            res.status(200).send({
                status: 200,
                message: "Single Image Uploaded!"
            })
        }

        static multipleImageUpload = async (req, res) => {
            console.log(req.body.images)
            //find user from the database using id which we pass in postman body
            if(req.body.images){
               const imageService = new ImageService()
               req.body.images = imageService.multipleImageUpload('multiple', req.body.images)
            }
            //assign the value
            const image = new ImageModel()
            image.images = req.body.images
            //save the user
            await image.save();

            res.status(200).send({
                status: 200,
                message: "Multiple Images Uploaded!!"
            })
        }
}

module.exports = UserController;