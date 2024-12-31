const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Define the user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// Apply the passportLocalMongoose plugin to the schema
userSchema.plugin(passportLocalMongoose);

// Export the model
module.exports = mongoose.model('User', userSchema);