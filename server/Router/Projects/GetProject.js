const project_Model = require('../../Model/Projects')


module.exports = async (req ,res)=>{
    const projects = await project_Model.find({});
    res.status(200).json({
        datas : projects.length,
        data : projects    
    })
}