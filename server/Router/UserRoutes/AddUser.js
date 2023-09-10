const UserModel = require('../../Model/User');

module.exports = async (req, res) => {
  try {
    // Attempt to create a new user based on the request body
    const newUser = await UserModel.create(req.body);

    // Attempt to save the new user
    await newUser.save(); // Await the save method

    // If successful, send a success response
    res.status(200).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (err) {
    // Handle different types of errors
    if (err.name === 'ValidationError') {
      // Validation error: Invalid user data provided
      res.status(400).json({
        message: "Invalid user data provided",
        error: err.message,
      });
    } else if (err.name === 'MongoError' && err.code === 11000) {
      // MongoDB duplicate key error (e.g., duplicate email)
      res.status(400).json({
        message: "User with the same email already exists",
        error: err.message,
      });
    } else {
      // Generic error: Something went wrong
      res.status(500).json({
        message: "Internal server error",
        error: err.message,
      });
    }
  }
};
