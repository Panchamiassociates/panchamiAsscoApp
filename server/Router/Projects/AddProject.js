const project_Model = require('../../Model/Projects')
module.exports = AddProject = async (req, res) => {
    const { project_name , project_description, image_URL } = req.body;

    // Create a new project instance
    const newProject = new project_Model({
        project_name,
        project_description,
        image_URL
    });

    try {
        // Save the new project to the database
        const savedProject = await newProject.save();
        res.status(201).json({
            message: "Data added successfully",
            project: savedProject
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "An error occurred while adding data"
        });
    }
}