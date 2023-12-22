// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/placement-tracker';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  const applicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    university: String,
    major: String,
    graduationYear: String,
    gpa: String,
    skills: String,
    experience: String,
    projects: String
  });
  
  const Application = new mongoose.model('Application', applicationSchema, 'application');
  
  const User = mongoose.model('User', userSchema);

app.get("/",(req, res)=>{
    res.send("Server is Running")
})

  // Signup route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', name: user.name, email:user.email});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/apply", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    university,
    major,
    graduationYear,
    gpa,
    skills,
    experience,
    projects
  } = req.body;

  try {
    // Assuming you have a 'applications' collection in your MongoDB
    const applicationData = new Application({
      firstName,
      lastName,
      email,
      phone,
      address,
      university,
      major,
      graduationYear,
      gpa,
      skills,
      experience,
      projects
    });

    await applicationData.save();

    res.status(200).json({ message: 'Application data saved successfully' });
  } catch (error) {
    console.error('Error during application data save:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
