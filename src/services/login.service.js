const { User } = require('../models');

// Req 3 - busca no banco de dados dos valores correspondentes a email e password, inseridos no parâmetro, após a função é exportada e será utilziado no controller
const getLogin = async (email, password) => {
  const login = await User.findOne({
    where: { email, password },
  });

  return login;
};

module.exports = { getLogin };