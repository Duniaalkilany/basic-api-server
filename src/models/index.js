'use strict';
const POSTGRES_URI = process.env.NODEENV =="test" ? 'sqlite:memory ':  "postgres://localhost:5432/dunia";
// const POSTGRES_URI = "postgres://localhost:5432/testing";
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel= require('./food');
const  ClothesModel  = require('./clothes');

let sequelize = new Sequelize(POSTGRES_URI,{});
// lets define our Schema
module.exports = {
      Clothes: ClothesModel(sequelize, DataTypes),
  Food: FoodModel(sequelize, DataTypes),
    db: sequelize
}





