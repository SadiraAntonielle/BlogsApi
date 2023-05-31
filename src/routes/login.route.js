const express = require('express');

const rota = express.Router();
const { getLoginController } = require('../controllers/login.controller');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
// const { validateJwt } = require('../middlewares/jwtValidation');

// Req 3 - criada a rota login, inserido os middlewares onde será feito a verificação de validação 1 a 1, s email e password passarem, a função do controller é chamada e testa a resposta
rota.post(
'/',
emailValidation,
passwordValidation,
getLoginController,
);

module.exports = rota;
