const { default: mongoose } = require("mongoose");
const UserModel = require('../../Model/User');

module.exports = GetUser = async (req, res) => {
    try {
        const Users = await UserModel.find({});
        res.status(200).json({
            message: "Users fetched successfully",
            NumberOfUser: Users.length,
            Users: Users
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            message: "Users cannot be fetched",
            NumberOfUser: 0, // Set the number of users to 0 in case of an error
            Users: []
        });
    }
};
