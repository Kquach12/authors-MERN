const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [true, "First Name is required"],
        minlength: [3, "Minimum length is 3 characters"]
    },
    lastName: { 
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "Minimum length is 3 characters"] 
    },
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);