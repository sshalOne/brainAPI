const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = { users:[{
	id:'5',
	user:'Yohana',
	email:'yoh@gmail.com',
	password:'five',
	entries:0,
	joined: new Date()
},
{
	id:'3',
	user:'Eyohe',
	email:'eyohe@gmail.com',
	password:'three',
	entries:0,
	joined: new Date()
},
{
	id:'31',
	user:'Meki',
	email:'meki@gmail.com',
	password:'thirty',
	entries:0,
	joined: new Date()
}]}

app.get('/', (req,res)=> {res.send('Hello there')});

app.post('/signin', (req,res)=>{
	if(req.body.user === database.users[0].user && req.body.password === database.users[0].password) {res.json('success')} 
	else {res.status(400).json('try again')}
});

app.listen(3300, () => {console.log('The server is listening on port 3300')});