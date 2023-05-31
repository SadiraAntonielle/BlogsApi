const express = require('express');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const displayNameValidation = require('../middlewares/displayNameValidation');
const { validateJwt } = require('../middlewares/jwtValidation');
const { getUserController,
  getAllUserController, getUserIdController } = require('../controllers/user.controller');

const rotaUser = express.Router();

rotaUser.post(
'/',
emailValidation,
passwordValidation,
displayNameValidation,
getUserController,
);

rotaUser.get('/', validateJwt, getAllUserController);
rotaUser.get('/:id', validateJwt, getUserIdController);

module.exports = rotaUser;