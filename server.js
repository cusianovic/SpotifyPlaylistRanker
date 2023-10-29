const express = require('express');
const db = require('./util/connectToDB.js')
const cors = require('cors')
require('dotenv').config()
const app = express();

const upload = require('./routes/upload');
const leaderboard = require('./routes/retrieveList');

const { auth } = require('express-openid-connect');

let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

const postgre = db(process.env.PSQL_PATH);
app.use(express.json())
app.use('/api', upload(postgre));
app.use('/api', leaderboard(postgre));

app.listen(3001);
