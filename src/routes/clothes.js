'use strict';

const express = require('express');

const router = express.Router();
// const {clothes} = require('../ models/clothes');
const { Clothes}=require('../models/index');
// RESTful routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


// RESTful route handlers

 function getClothes(req, res) {
    let getAllClothes = Clothes.findAll();
    res.status(200).json(getAllClothes);
  }
  
  function getOneClothes(req, res) {
let id = parseInt(req.params.id);
    let onecloth =  Clothes.findOne({ where: {id: id} });
    res.status(200).json(onecloth);
  }
  
 function createClothes(req, res) {
    let obj = req.body;
    let  newCloth  = Clothes.create(obj);
    res.status(201).json( newCloth );
  }
  
//   async function updateClothes(req, res) {
//     let id = parseInt(req.params.id);
//  const {color,material,countryOfManufacture} = obj
//  let ;
//      // find 
//      let found  =await Clothes.findOne({where: {id: id}});

//    // update  + save
//     let updatedcloth = await found.update(obj);

//     res.status(200).json(updatedcloth);


//   }


  function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    var values = {color:'red',material:'coton', countryOfManufacture:'turkey' };
var condition = { where :{id:id} }; 


    let updatedcloth = Clothes.update(values, condition )
    res.status(200).json(updatedcloth);
  }
  
  function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deletedCloth = Clothes.destroy({where: {id: id}});
    res.status(204).json(deletedCloth);
  }
  
  module.exports = router;