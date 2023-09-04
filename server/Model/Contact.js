const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  message: String,
  date: {
    type: Date,
    default: Date.now(),
    expires: '30d', // Set the expiration time to 30 days
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
