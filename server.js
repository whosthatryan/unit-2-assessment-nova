require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
    console.log('Connection made!');
  });

// const Todo = require('./models/todos.js');

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

const todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

app.listen(PORT, ()=>{
    console.log('ayyyy im workin heeyahhh')
  })