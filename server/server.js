const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AddProject = require('./Router/Projects/AddProject');
const DeleteProject = require('./Router/Projects/DeleteProject');
const GetProject = require('./Router/Projects/GetProject');
const GetUser = require('./Router/UserRoutes/GetUser')
const AddUser = require('./Router/UserRoutes/AddUser')
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
app.get('/api/v1/get-project' , GetProject)
app.delete('/api/v1/delete-project/:project_id', DeleteProject);
app.post('/api/v1/add-project', AddProject);
// 

//authentication

const Login = require("./Router/UserRoutes/Login");
const UpdateStatus = require("./Router/UserRoutes/UpdateStatus");
const DeleteUser = require("./Router/UserRoutes/DeleteUser")

app.get('/api/v1/user' , GetUser);
app.post('/api/v1/user' , AddUser);
app.post('/api/v1/login', Login);
app.patch('/api/v1/user/:id' , UpdateStatus);
app.delete('/api/v1/user/:id', DeleteUser)
app.listen(3001, () => {
    console.log("Server running at port 3000");
});
