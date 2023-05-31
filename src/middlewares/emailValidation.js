function validationEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function emailValidation(req, res, next) {
  const { email } = req.body;

  if (!email || email === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!validationEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  return next();
}

module.exports = emailValidation;