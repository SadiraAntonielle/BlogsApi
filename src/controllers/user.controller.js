const { createToken } = require('../auth/authJwt');
const { createUser, getEmail, getAllUser, getUserId } = require('../services/user.service');

const getAllUserController = async (req, res) => {
  const user = await getAllUser();

  return res.status(200).json(user);
};

const getUserIdController = async (req, res) => {
  const { id } = req.params;
  const userId = await getUserId(id);

  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userId);
};

const getUserController = async (req, res) => {
  const { displayName, password, email, image } = req.body;
  const validatEmail = await getEmail(email);

  if (validatEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const users = await createUser(displayName, password, email, image);

  if (!users) {
    return res.status(400).json({ message: 'User não acadstrado' });
  }
  const { password: _password, ...userWithoutPassword } = users;
  const token = createToken(userWithoutPassword);

  return res.status(201).json({ token });
};

module.exports = { getUserController, getAllUserController, getUserIdController };