const express = require('express');
const db = require('./util/connectToDB.js')
const app = express();

const postgre = db();

app.get('/', (req, res) =>{

});


app.listen(3000);