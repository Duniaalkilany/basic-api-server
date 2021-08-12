'use strict';

const FoodModel= (sequalize, DataTypes) => {
    let food=  sequalize.define('food', {
   name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
     type: {
            type: DataTypes.STRING,
            allowNull: false
        },
     Taste:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
    });
    return food;
}

module.exports =FoodModel ;