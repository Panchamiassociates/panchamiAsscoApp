const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    approved: {
        type: Boolean,
        default : false
    }
});

// Hash the password before saving
AdminSchema.pre('save', async function (next) {
    const admin = this;
    if (!admin.isModified('password')) return next();

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(admin.password, saltRounds);
        admin.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
