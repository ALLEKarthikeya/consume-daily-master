const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/Blog';
//8x7XzAf25lZyttJP


mongoose.connect(connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
});

module.exports = db;    // Export the active connection.