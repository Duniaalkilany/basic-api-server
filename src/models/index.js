'use strict';
const POSTGRES_URI ="postgres://localhost:5433/dunia"

const { Sequelize, DataTypes } = require('sequelize');
const FoodModel= require('./food');
const  ClothesModel  = require('./clothes');

const db = new Sequelize('dunia', 'postgres', `${process.env.DB_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres',
    port:5433,
} );
let sequelize = new Sequelize(POSTGRES_URI,{});



// lets define our Schema
module.exports = {
      Clothes: ClothesModel(sequelize, DataTypes),
  Food: FoodModel(sequelize, DataTypes),
    db: sequelize
}


//


