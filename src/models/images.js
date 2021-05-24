const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    images: [{
        type: String
    }]
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image;