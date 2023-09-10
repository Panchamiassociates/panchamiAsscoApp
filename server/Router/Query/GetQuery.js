const Query = require('../../Model/Query')

module.exports = GetQuery = async (req, res) => {
    try {
      const queries = await Query.find({});
      res.status(200).json({
        message: "Queries fetched successfully",
        data: queries
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error fetching queries",
        error: err
      });
    }
  }