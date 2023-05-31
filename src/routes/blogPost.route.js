const express = require('express');

const rotaBlogPost = express.Router();
const { validateJwt } = require('../middlewares/jwtValidation');
const { createBlogPost } = require('../controllers/blogPost.controller');

rotaBlogPost.post('/', validateJwt, createBlogPost);

module.exports = rotaBlogPost;