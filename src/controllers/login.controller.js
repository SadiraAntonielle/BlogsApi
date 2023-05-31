const { createToken } = require('../auth/authJwt');
const { getLogin } = require('../services/login.service');
// const jwt = require('jsonwebtoken');

// Req 3 - Eu extrai o email e password do body e chamando a função do service(getLogin) passando os argumentos email e password e esperando uma resposta. Fiz uma condição que se o valor for diferente ou nulo é retornado um erro status 400 com mensagem de erro
const getLoginController = async (req, res) => {
  const { email, password } = req.body;
  const login = await getLogin(email, password);
// console.log(login.User);
  if (!login) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const { password: _password, ...userWithoutPassword } = login;
  const token = createToken(userWithoutPassword);

  return res.status(200).json({ token });
};

module.exports = { getLoginController };