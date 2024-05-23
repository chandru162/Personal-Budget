const mongoose = require('mongoose');
require('dotenv').config();

const connectdb = () => {
    mongoose.connect(process.env.DB_URL);

    mongoose.connection.on('connected', () => {
        console.log('MongoDB is connected successfully!');
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB is not connected:', err);
    });
};

module.exports = connectdb;