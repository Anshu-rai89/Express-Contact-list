// aquire database

const mongoose=require('mongoose');

// connect it with database

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/contact_list_db',{ useUnifiedTopology: true });

// aquire the connection 

const db=mongoose.connection;

// check for error

db.on('error',console.error.bind(console,'error binding'));

// if succucful

db.once('open',function()
{
    console.log("Db is running ");
});