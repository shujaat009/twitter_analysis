const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactForm', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    name: String,
    email: String,
    message: String
});

// Create a model
const Contact = mongoose.model('Contact', ContactSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    newContact.save()
        .then(() => res.json({ message: 'Contact information saved successfully!' }))
        .catch(err => res.status(400).json({ message: 'Error saving contact information', error: err }));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
