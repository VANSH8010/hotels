// method 1 for decleartion of function 
// function add(a,b){
//    return a+b;
// }
// var result= add(2,5);
// console.log(result);

// // another way to declasre a function
// var add =function(a,b){
// return a+b;
// }
// var result= add(2,5);
// console.log(result);

//calling of a function using arrow function
// var add =(a,b) =>{return a+b;}
// var result= add(2,8);
// console.log(result);

// // ....CALLBACK  FUNCTION.....
// function callback(){
//     console.log("Calling of a  function");
// }
// //Main function
// var add=function(a,b,callback){
//     var result=a+b;
//     console.log('result: '+result);
//     callback();
// }
// add(4,6,callback);

// module

// var fs = require('fs');
// var os = require('os');

// var user =os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('message.txt','Hi' + user.username +' \n' ,()=>{
//     console.log('file is created');
// } );

// // Import a notes.js in server.js(inline-js )
// const notes=require('./notes.js');
// console.log('This is server side');
// var age=notes.age;
// console.log(age);
// var result=notes.addnumber(age,20);
// console.log('Result is: ' +result );

// // lodash(library)
// var _ =require('lodash');

// var data=["person","person",1,1,'2','4',"person"];
// var filter=_.uniq(data);
// console.log(filter);

//CREATING A SERVER 
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body (data will be stored in a req.body)

const Person = require('./models/Person'); 


app.get('/', function (req, res) {
  res.send('I vansh from this side.. Creating a server ');
})
app.get('/logo', function (req, res) {
    res.send('Server is running');
  })
app.get('/png', function (req, res) {
    res.send('our work is completed');
  })
  
//post route to add a person
// app.post('/person', async(req,res) =>{
//   try{
//     const data =req.body

//     // create a new person to the database
//     const newPerson= new Person(data);

//     // 
//     const response=await newPerson.save();
//     console.log("data is saved");
//     res.status(200).json(response);
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).json({error:"internal server error"});
//   }
// })

// app.get('/person/:workType', async (req,res) =>{
//     try{
//       const workType = req.params.workType;
//       if(workType =='chef' || workType =='manager' || workType =='waitor'){
//         const response= await Person.find({work:workType});
//         console.log("response fetched");
//         res.status(200).json(response);
//       }
//       else{
//         res.status(404).json({error:'invalid server error'});
//       }

//     } catch(err){
//       console.log(err);
//       res.status(500).json({error:'internal server error'})
//     }
// })
// IMPORT THE ROUTER FILES 
const personroutes=require('./routes/personroutes');

// USE  THE ROUTER
app.use('/person',personroutes);

const PORT= process.env.PORT || 3000;

app.listen(PORT,() =>{
  console.log("listening to port number");
});
