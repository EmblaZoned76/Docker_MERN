const mongoose = require("mongoose");

const connectToDB = async() => {
    const connect = await mongoose.connect(process.env.MONGO_URI,{
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
    });
    console.log(`Mongo connected : ${connect.connection.host} `);
};

module.exports = connectToDB;