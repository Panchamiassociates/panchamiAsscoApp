const UserModel = require("../../Model/User");

module.exports = DeleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await UserModel.findByIdAndRemove(userId);

        if (deletedUser) {
            res.status(200).json({
                message: 'User deleted successfully',
                deletedUser
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to delete user'
        });
    }
};
