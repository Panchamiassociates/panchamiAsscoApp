const Query = require('../../Model/Query')

module.exports = DeleteQuery = async (req, res) => {
    const _id = req.params.id;
    try {
      await Query.findByIdAndDelete(_id);
      res.status(200).json({
        message: "Data deleted successfully"
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error deleting data",
        error: err
      });
    }
  }