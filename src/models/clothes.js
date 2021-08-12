'use strict';

const ClothesModel= (sequalize, DataTypes) => {
    let clothes= sequalize.define('clothes', {
      color: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
       material: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countryOfManufacture:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
    });
    return clothes;
}

module.exports = ClothesModel;