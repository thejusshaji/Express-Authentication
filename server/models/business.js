let mongoose = require('mongoose');
let businessModel = mongoose.Schema({
    name: String,
    mobile: Number,

    email: String,
   
},
    {
        collection: "business"
    });

module.exports = mongoose.model('business', businessModel);