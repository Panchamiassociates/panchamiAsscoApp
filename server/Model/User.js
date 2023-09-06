const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    Role: {
        type: String,
        default: "USER"
    },
    isActive : {
        type : Boolean,
        default : false
    }
});

// Middleware to hash the password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const saltRounds = 10; // You can adjust the number of salt rounds as needed
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
