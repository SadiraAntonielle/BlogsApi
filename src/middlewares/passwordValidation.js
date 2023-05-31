function passwordValidation(req, res, next) { // verificar na monitoria se isso é correto
  const { password } = req.body;

  if (!password || password === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
);
  }
  return next();
}

module.exports = passwordValidation;