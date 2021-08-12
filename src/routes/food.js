'use strict';

const express = require('express');

const router = express.Router();
const {Food} = require('../models/index');
// RESTful routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful route handlers

async function getFood(req, res) {
  let getAllFoods = await Food.findAll();
  res.status(200).json( getAllFoods);
}


async function getOneFood (req, res) {
    let id = parseInt(req.params.id);
        let oneFood = await Food.findOne({ where: {id: id} });
        res.status(200).json(oneFood);
      }

async function createFood(req, res) {
  let obj = req.body;
  let createdFood =await Food.create(obj);
  res.status(201).json(createdFood);
}



async function  updateFood(req, res) {
    const id = parseInt(req.params.id);
    var values = {name:'pizza',type:'Italian Food',Taste:'spicy' };
var condition = { where :{id:id} }; 


    let updatedFood =await Food.update(values, condition )
    res.status(200).json(updatedFood );
  }
  

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deletedFood = await Food.destroy({where: {id:id}});;
  res.status(204).json(deletedFood);
}

module.exports = router;