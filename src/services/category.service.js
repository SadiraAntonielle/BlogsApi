const { Category } = require('../models');

const getAllCategory = async () => {
  const categories = await Category.findAll();
  const verificaCategorias = categories.map((category) => category.id);
  return {
    categories,
    verificaCategorias,
  };
};

const createCategory = async (name) => {
  const categoryCreate = await Category.create({ name });
  return categoryCreate;
};

module.exports = { getAllCategory, createCategory };