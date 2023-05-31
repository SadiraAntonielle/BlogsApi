const { User } = require('../models');

const createUser = async (displayName, password, email, image) => {
  const newUser = await User.create({ displayName, password, email, image });

  return newUser;
};

const getEmail = async (email) => {
  const login = await User.findOne({
    where: { email },
  });

  return login;
};

const getAllUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return user;
};

const getUserId = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = { createUser, getEmail, getAllUser, getUserId };