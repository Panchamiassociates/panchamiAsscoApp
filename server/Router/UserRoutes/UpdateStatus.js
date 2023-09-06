const UserModel = require("../../Model/User");

module.exports = UpdateStatus = async (req, res) => {
    const user_id = req.params.id;

    try {
        const user = await UserModel.findByIdAndUpdate(user_id, { isActive: true }, { new: true });

        if (user) {
            res.status(200).json({
                message: "Status changed successfully",
                newData: user
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Status cannot be changed"
        });
    }
};
