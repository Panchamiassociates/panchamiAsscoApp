const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AddProject = require('./Router/Projects/AddProject');
const DeleteProject = require('./Router/Projects/DeleteProject');
const GetProject = require('./Router/Projects/GetProject');
const Admin = require('./Model/Admin');
const multer = require('multer');
const User = require('./Model/User');
const bcrypt = require('bcrypt');
const Projects = require('./Model/Projects')
app.use(express.json())
const Contact =  require('./Model/Contact')
const cors = require('cors');

app.use(cors());

mongoose.connection.collection('contacts').createIndex({ date: 1 }, { expireAfterSeconds: 0 });
const url = "mongodb+srv://panchamiassociates2022:7WyGxojmzVZREFXn@panchamiassociates.obhbdun.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Cannot connect to the database: " + err);
    });

//project C-R-D
app.get('/api/v1/get-project' , GetProject)
app.delete('/api/v1/delete-project/:project_id', DeleteProject);
app.post('/api/v1/add-project', AddProject);
// 


//authentication

app.post('/api/v1/add-admin', async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save(); // Wait for the save operation to complete
        res.status(200).json({
            message: "Admin added successfully"
        });
    } catch (error) {
        console.error("Error adding admin:", error);
        res.status(404).json({
            message: "Admin could not be added",
            error: error.message // Send the error message for better debugging
        });
    }
});

app.post('/api/v1/admin-login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (admin && await bcrypt.compare(password, admin.password)) {
            res.status(200).json({
                message: "Admin logged in successfully"
            });
        } else {
            res.status(201).json({
                message: "Invalid credentials"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "An error occurred"
        });
    }
});

app.post('/api/v1/add-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save(); // Wait for the save operation to complete
        res.status(200).json({
            message: "User added successfully"
        });
    } catch (error) {
        console.error("Error adding admin:", error);
        res.status(404).json({
            message: "User could not be added",
            error: error.message // Send the error message for better debugging
        });
    }
});

app.get('/api/v1/get-Users' , async (req,res)=>{
    
    try{
        const users = await User.find({});
        res.status(200).json({
            message: "users fetched successfully",
            data : users
        })
    }
    catch(Err){
        console.log(Err);
        res.status(200).json({
            message : "users cannot be fetched",
            data : []
        })
    }
    
})

app.delete('/api/v1/delete/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      // Use the User model to find and delete the user by ID
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.patch('/api/v1/add-User/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      // Fetch the user by ID from your database (e.g., MongoDB)
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the isActive property to true
      user.isActive = true;
  
      // Save the updated user to the database
      await user.save();
  
      // Respond with a success message or the updated user data
      return res.status(200).json({ message: 'User isActive set to true', user });
    } catch (error) {
      console.error('Error updating user isActive:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


  app.post('/api/v1/contact', async (req, res) => {
    try {
      const { name, email, phoneNumber, message } = req.body;
      const contact = new Contact({ name, email, phoneNumber, message });
      await contact.save();
      res.status(200).json({ message: 'Contact saved successfully' });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/v1/getQuery', async (req, res) => {
    try {
      const data = await Contact.find();
      res.status(200).json({
        message: "Data fetched successfully",
        data: data,
        length : data.length
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({
        message: "Data cannot be fetched",
        data: null
      });
    }
  });
  

app.listen(3001, () => {
    console.log("Server running at port 3000");
});
