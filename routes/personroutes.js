const express = require('express');
const router = express();
const Person = require('./../models/Person'); 

// post is used to save the data 
router.post('/', async(req,res) =>{
    try{
      const data =req.body
  
      // create a new person to the database
      const newPerson= new Person(data);
  
      // 
      const response=await newPerson.save();
      console.log("data is saved");
      res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
  })

     router.post('/', async (req,res) =>{
    try{
        const response= await Person.find();
        console.log("response fetched");
        res.status(200).json(response);
      } catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
    }
})


  router.get('/:workType', async (req,res) =>{
      try{
        const workType = req.params.workType;
        if(workType =='chef' || workType =='manager' || workType =='waitor'){
          const response= await Person.find({work:workType});
          console.log("response fetched");
          res.status(200).json(response);
        }
        else{
          res.status(404).json({error:'invalid server error'});
        }

  
      } catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
      }
  })

  //PERFORM UPDATE OPERTION
  router.put('/:id', async (req,res)=>{
     const personID=req.params.id;//extract the  if from the url browser
     const updatepersonId=req.body;//update data for the person
try{
    const response =await Person.findByIdAndUpdate(personID,updatepersonId, {
          new:true,
         runVaidators:true,
        })
        console.log("data update");
        res.status(200).json(response);

    } catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'})
    }
  })  
//PERFORM DELETE OPERATION
  router.delete('/:id', async(req,res)=>{
    try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    console.log("data deleted");
    res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
    }
  })

  module.exports=router;