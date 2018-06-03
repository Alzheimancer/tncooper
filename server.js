const express = require('express');
const mongoose = require('mongoose');
const products = require('./routes/api/products');
const users = require('./routes/api/users');

const bodyParser = require('body-parser');

const app = express();

// db config
const db = require('./config/keys').mongoURI;

// BodyParser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/products', products);
app.use('/api/users', users);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port $port `));