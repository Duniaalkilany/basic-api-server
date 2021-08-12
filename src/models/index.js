'use strict';
const POSTGRES_URI =  "postgres://dunia:pgpassword@db:5432/dunia" ;

const { Sequelize, DataTypes } = require('sequelize');
const FoodModel= require('./food');
const  ClothesModel  = require('./clothes');

// let sequelize = new Sequelize(POSTGRES_URI,{});

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres',
  host: "localhost",
  port: 5433,
});


// lets define our Schema
module.exports = {
      Clothes: ClothesModel(sequelize, DataTypes),
  Food: FoodModel(sequelize, DataTypes),
    db: sequelize
}


// "postgres://localhost:5432/dunia"


