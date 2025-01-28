//sw89mF8tYVnPuhvH
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./AnimalRoutes/AnimalRoutes');
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());
app.use('/animal', router);

//connect to db
mongoose.connect('mongodb+srv://animals:sw89mF8tYVnPuhvH@cluster0.n2tvp.mongodb.net/')
.then(() => console.log('Connected to db'))
.then(() => {app.listen(5000);})
.catch((err) => console.log(err));