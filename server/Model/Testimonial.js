const mongoose = require('mongoose')


const TestimonialSchema = new mongoose.Schema({
   author: String,
    text : String, 
})

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = Testimonial;