// this will be use to create data base schemas

const mongoose=require('mongoose');

const contact_schema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        phone:
        {
            type:String,
            required:true
        }
    }
);

// defining the name of database
var Contact=mongoose.model('Contact',contact_schema);
module.exports=Contact;