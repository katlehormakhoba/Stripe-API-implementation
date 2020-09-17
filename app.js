const path = require('path');
const express = require('express');
const app = express();

const viewRoutes = require('./routes/viewRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

//MIDDLEWARE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Serving static files
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static(path.join(__dirname, 'public')))

//APP.USE ROUTES DECLARATION MIDDLEWARE
app.use('/', viewRoutes);
app.use('/api/v1/payment', paymentRoutes);



module.exports = app;