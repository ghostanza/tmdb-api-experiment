require('dotenv').config();
var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    chalk = require('chalk'),
    port = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

// use the router
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

// 404 handler
app.use((req, res, next) => {
  res.status(404);
  res.redirect('/');
});

app.listen(port);
console.log(`listening on port ${port}`);
module.exports = app;
