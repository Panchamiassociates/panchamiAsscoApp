const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json())
const cors = require('cors');

app.use(cors());

mongoose.connection.collection('contacts').createIndex({ date: 1 }, { expireAfterSeconds: 0 });
const url = "mongodb+srv://Panchami:f8BkwZCBSH5LxSVl@cluster0.lc47tlw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Cannot connect to the database: " + err);
    });
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

//uploading image

const admin = require('firebase-admin');
const serviceAccount = require('./panchami-8e012-firebase-adminsdk-8ej16-9e0e358bb3.json'); // Provide the correct path to your service account key JSON file

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // Your Firebase configuration options
// });
const multer = require('multer');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Your Firebase configuration options
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const Images = mongoose.model('Image', {
  imageUrl: String,
  title: String,
  description: String,
  // Add other fields as needed
});

app.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file || !req.body.title || !req.body.description) {
      return res.status(400).json({ error: 'Please provide an image, title, and description.' });
    }

    const bucket = admin.storage().bucket('gs://panchami-8e012.appspot.com');
    const uniqueFilename = `Projects/${Date.now()}_${req.file.originalname}`;
    const file = bucket.file(uniqueFilename);

    // Upload the image to Firebase Cloud Storage
    await file.createWriteStream().end(req.file.buffer);

    // Get the public URL of the uploaded image
    const [publicUrl] = await file.getSignedUrl({
      action: 'read',
      expires: '01-01-2100', // Set an appropriate expiration date
    });

    // Store the image URL, title, and description in MongoDB
    const image = new Images({
      imageUrl: publicUrl,
      title: req.body.title,
      description: req.body.description,
      // Add other fields as needed
    });

    await image.save();

    res.json({ imageUrl: publicUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'An error occurred while uploading the image.' });
  }
});


// Add a new route to fetch projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Images.find(); // Assuming Image is your Mongoose model
    res.status(200).json({ message: "Data fetched successfully", data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: "Unable to fetch data" });
  }
});






// Start your Express.js server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});