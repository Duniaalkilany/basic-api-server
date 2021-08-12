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

async function getClothes(req, res) {
    let getAllClothes =await Clothes.findAll();
    res.status(200).json(getAllClothes);
  }
  
  async function getOneClothes(req, res) {
let id = parseInt(req.params.id);
    let onecloth = await Clothes.findOne({ where: {id: id} });
    res.status(200).json(onecloth);
  }
  
 async function createClothes(req, res) {
    let obj = req.body;
    let  newCloth  =await Clothes.create(obj);
    res.status(201).json( newCloth );
  }
  
  async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
 let obj = req.body;
     // find 
     let found  =await Clothes.findOne({where: {id: id}});

   // update  + save
    let updatedcloth = await found.update(obj);

    res.status(200).json(updatedcloth);


  }
  
  async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deletedCloth = await Clothes.destroy({where: {id: id}});
    res.status(204).json(deletedCloth);
  }
  
  module.exports = router;