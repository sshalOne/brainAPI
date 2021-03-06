const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : 'postgresql-lively-71881',
    user : 'postgres',
    password: '',
    database : 'smart_brain'
	}
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=> {res.json('it is working')});
app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)});
app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)});
app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req,res,db)});
app.put('/image', (req,res) => {image.handleImage(req,res,db)});
app.post('/imageUrl', (req,res) => {image.handleApiCall(req,res)});

app.listen(process.env.PORT || 3300, () => {console.log(`The server is listening on port ${process.env.PORT}`)});