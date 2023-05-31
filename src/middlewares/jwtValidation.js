const { verifyToken } = require('../auth/authJwt');

const validateJwt = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

      const data = verifyToken(authorization);
      req.payload = data;
      // console.log(data);
      next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJwt };