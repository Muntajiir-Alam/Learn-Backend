const mongoose = require('mongoose');
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pagal__hydra:muntajir.king@cluster0.v7eq1ma.mongodb.net/notes');
    console.log('MongoDB connected');
};

module.exports = connectDB;