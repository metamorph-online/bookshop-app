var express = require('express');
const app = express();
const path = require('path');
var passport = require('passport');
const authRouts = require('./routes/authRoutes');

authRouts(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(process.env.PORT || 8080);
