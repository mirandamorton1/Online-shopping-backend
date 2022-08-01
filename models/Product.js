// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns - copy category.js set up. 
    // see product-seeds for items
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
     },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      // defaultValue?
     },
     stock: {
      type: DataTypes.BOOLEAN,
     defaultValue: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      // allowNull: false, need this??
      references: {
        model: 'category',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
