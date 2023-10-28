const express = require('express');
const db = require('./util/connectToDB.js')
const app = express();

const upload = require('./routes/upload');

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'ngJdYojyd2Owfml1YlZuOuEigDxrc2ZV',
  issuerBaseURL: 'https://dev-43dibfgl0wzgvp8x.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/api/authenticate', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const postgre = db();
app.use(express.json())
app.use('/api', upload(postgre));

app.listen(3000);
