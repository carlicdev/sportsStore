const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

// DB
require('../server/db/db');

// Routers

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Sessions

// Passport

// React static files
app.use(express.static(path.join(__dirname, '../client/build/index.html')))

// Api

// handles any request that doesn´t match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// Start server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`)
});