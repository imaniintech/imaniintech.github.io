const mongoose = require("mongoose")

const poemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    tags: {type: String}, 
    content: {type: String, required: true}
})

const Poem = mongoose.model("Product", poemSchema)

module.exports = Poem