const express = require('express');
const db = require('./util/connectToDB.js')
const cors = require('cors')
require('dotenv').config()
const app = express();

const upload = require('./routes/upload');
<<<<<<< HEAD
const leaderboard = require('./routes/retrieveList');
=======
>>>>>>> 4a32bea3bbd81fe240727d96a85f9ffa121438b1
const random = require('./routes/random');
const vote = require('./routes/vote');

const { auth } = require('express-openid-connect');

let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

const postgre = db(process.env.PSQL_PATH);
app.use(express.json())
app.use('/api', upload(postgre));
<<<<<<< HEAD
app.use('/api', leaderboard(postgre));
=======
>>>>>>> 4a32bea3bbd81fe240727d96a85f9ffa121438b1
app.use('/api', random(postgre));
app.use('/api', vote(postgre));

app.listen(3001);
