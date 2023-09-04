const project_Model = require('../../Model/Projects')

module.exports = async (req, res) => {
    const projectId = req.params.project_id;

    try {
        const deletedProject = await project_Model.findByIdAndRemove(projectId);
        if (!deletedProject) {
            return res.status(404).json({
                message: "Project not found"
            });
        }
        res.status(200).json({
            message: "Project deleted successfully",
            deletedProject
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "An error occurred while deleting the project"
        });
    }
};