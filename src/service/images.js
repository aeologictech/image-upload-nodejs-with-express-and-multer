const fs = require('fs')

class ImagesService {

    singleImageUpload = (imagePath, base64Image = null) => {
       
            // to declare some path to store your converted image
            const path =  `${imagePath}/${Date.now()}.png`

            // to convert base64 format into random filename
            const base64Data = base64Image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFileSync('public/'+path, base64Data,  {encoding: 'base64'});
            return path;
    }
    
    multipleImageUpload = (imagePath, base64Image = []) => {
        let images = [];
        console.log("base64Image")
        
        base64Image.forEach((img)=>{
            // to declare some path to store your converted image
            const path =   `${imagePath}/${Date.now()}.png`

            images.push(path);
            const base64InputImage = img;
            // to convert base64 format into random filename
            const base64Data = base64InputImage.replace(/^data:([A-Za-z-+/]+);base64,/, '');

            fs.writeFileSync('public/'+path, base64Data,  {encoding: 'base64'});

        })
        images.map(p => {
            console.log(p)
        })
        return images;
    }

}

module.exports = ImagesService