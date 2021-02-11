const mongoose = require('mongoose');
const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb+srv://cluster0.kq3w3.mongodb.net/animal', {
        useNewUrlParser:true,
        useCreateIndex:true, 
        useFindAndModify:false,
        useUnifiedTopology:true
    });
    console.log(`mongodb connected :${conn.connection.host}`.cyan.underline.bold)
}

module.exports= connectDB