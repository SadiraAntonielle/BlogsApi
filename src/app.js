const express = require('express');

const rotaLogin = require('./routes/login.route');
const rotaUser = require('./routes/user.route');
const rotaCategory = require('./routes/category.route');
const rotaBlogPost = require('./routes/blogPost.route');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', rotaLogin);
app.use('/user', rotaUser);
app.use('/user/:id', rotaUser);
app.use('/categories', rotaCategory);
app.use('/post', rotaBlogPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
