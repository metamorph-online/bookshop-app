var express = require('express');
var app = express();
var passport = require('passport');
const authRouts = require('./routes/authRoutes');

authRouts(app);

app.listen(process.env.PORT || 8080);
