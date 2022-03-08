const sequelize = require('../config/connection');

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
Category.hasMany(Product,{
  foreignKey: "category_id",
  // onDelete: "SET NULL",
})
// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: "category_id",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag 
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag ,
})
// sequelize.sync({ force: true });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};