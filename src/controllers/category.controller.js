const { getAllCategory, createCategory } = require('../services/category.service');

  const getAllCategoryController = async (req, res) => {
    const { categories } = await getAllCategory();
  
    return res.status(200).json(categories);
  };

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const categoryN = await createCategory(name);

  return res.status(201).json(categoryN);
};

module.exports = { getAllCategoryController, createCategoryController };