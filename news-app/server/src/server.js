// simple express js server
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { async } = require('q');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017');

// create a schema for users
const userSchema = new Schema({
    username: String,
    password: String,
    savedArticles: [{ type: ObjectId, ref: 'Article' }]
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    const User = mongoose.model('User', userSchema);
    const user = new User({ username, password });

    // validate username and password
    // if (!username || !password) {
    //     res.status(400).json({ message: "Username and password are required" });
    //     return;
    // }
    // if (!password || password.length < 8 || password.includes(' ') || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[^A-Za-z]/.test(password)) {
    //     res.status(400).send({ message: 'Password must be at least 8 characters long and cannot contain spaces. It must also contain at least one upper case letter, one lower case letter and one non-letter character.' });
    //     return;
    // }
    // if (!username || username.length < 8 || username.includes(' ') || !/[A-Z]/.test(username) || !/[a-z]/.test(username) || !/[^A-Za-z]/.test(username)) {
    //     res.status(400).send({ message: "username mmust be at least 8 characters long and cannot contain spaces. It must also contain at least one upper case letter, one lower case letter and one non-letter character." });
    //     return;
    // }
    // save data to mongodb using mongoose
    user.save().catch((err) => {
        res.status(400).json({ message: err.message });
    });
    res.status(200).json({ message: "User created successfully" });
});

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



