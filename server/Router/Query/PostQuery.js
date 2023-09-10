const Query = require('../../Model/Query')

module.exports = PostQuery = async (req, res) => {
    const newQuery = new Query(req.body);
  
    try {
      await newQuery.save();
      res.status(201).json({
        message: "Query posted successfully",
        data: newQuery
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error posting query",
        error: err
      });
    }
  }