const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');


app.use(express.json())
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

// const AddProject = require('./Router/Projects/AddProject');
// const DeleteProject = require('./Router/Projects/DeleteProject');
// const GetProject = require('./Router/Projects/GetProject');

// app.get('/api/v1/get-project' , GetProject)
// app.delete('/api/v1/delete-project/:project_id', DeleteProject);
// app.post('/api/v1/add-project', AddProject);
// 

//authentication

const Login = require("./Router/UserRoutes/Login");
const UpdateStatus = require("./Router/UserRoutes/UpdateStatus");
const DeleteUser = require("./Router/UserRoutes/DeleteUser");
const GetUser = require('./Router/UserRoutes/GetUser');
const AddUser = require('./Router/UserRoutes/AddUser');

app.get('/api/v1/user' , GetUser);
app.post('/api/v1/user' , AddUser);
app.post('/api/v1/login', Login);
app.patch('/api/v1/user/:id' , UpdateStatus);
app.delete('/api/v1/user/:id', DeleteUser)


//add - project

const imageSchema = new mongoose.Schema({
    data: String, // Base64 data
  });

  const ProjectSchema = new mongoose.Schema({
    title : {
        type : String,
        require: true
    },
    description : {
        type: String,
        require : true
    },
    image : {
        type: String,
        require: true
    }
  })
  
  const Image = mongoose.model('Image', imageSchema);


  // Set up Multer for file uploads
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });
  
  // Upload an image and convert to base64
  // Define your Project model and schema
const Project = mongoose.model('Project', ProjectSchema);

// Create an endpoint for uploading projects with images
app.post('/upload-project', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const base64data = req.file.buffer.toString('base64');

  // Save the base64 data to MongoDB for the Project model
  const newProject = new Project({
    title: req.body.title,
    description: req.body.description,
    image: base64data,
  });

  newProject
    .save()
    .then(() => res.send('Project uploaded and saved to MongoDB.'))
    .catch((err) => res.status(500).send(err));
});

  // Modify your server.js or create a new route
// Modify your /api/images route to use promises
// Create a new endpoint to fetch project data
app.get('/projects', (req, res) => {
    Project.find({})
      .then((projects) => {
        res.json(projects);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        res.status(500).send('Error fetching projects from the database.');
      });
  });
  
  

  app.listen(3001, () => {
    console.log("Server running at port 3000");
});