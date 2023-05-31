const express = require('express');

const rotaCategory = express.Router();
const { validateJwt } = require('../middlewares/jwtValidation');
const { createCategoryController,
  getAllCategoryController } = require('../controllers/category.controller');

rotaCategory.post('/', validateJwt, createCategoryController);
rotaCategory.get('/', validateJwt, getAllCategoryController);

module.exports = rotaCategory;