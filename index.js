const express = require('express');
const path = require('path');
const port = 8000;

const db=require('./config/mongoose');
const Contact=require('./models/contact.js');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

/*var contactlist=
[
    {
       name:'anshu',
       phone:'88998988'
    }
];*/



app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){
    Contact.find({},function(err,contacts)
    {
        if(err) { console.log("error infetching "); return;}

        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
    });
   
});
});


// function to handle form 
app.post('/create-contact',function(req,res)
{
   // we will read form data here 
  Contact.create(
      {
          name:req.body.name,
          phone:req.body.phone
      },function(err,newContact)
      {
          if(err)  
          {console.log("error in creating database") ;return;}
          console.log("**** ",newContact);
          return res.redirect('back');
      }
  );
});


// server fired here 
app.listen(port,function(err)
{
     if(err)   console.log("Error ");

     console.log("Express server is running ");
});