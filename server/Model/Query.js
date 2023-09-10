const mongoose =  require('mongoose');

const QuerySchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    message: String,
})

const Query = mongoose.model("Query",QuerySchema);


module.exports = Query