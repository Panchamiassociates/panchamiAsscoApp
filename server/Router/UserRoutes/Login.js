const UserModel = require('../../Model/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(300).json({
                message: "User not found",
            });
        }

        // Assuming you have hashed passwords stored in the user model
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return res.status(200).json({
                message: "User logged in successfully",
                role: user.Role // Assuming your user model has a 'role' property
            });
        } else {
            return res.status(200).json({
                message: "Invalid credentials",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
