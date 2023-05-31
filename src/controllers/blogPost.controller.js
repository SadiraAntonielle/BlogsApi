const { getAllCategory } = require('../services/category.service');
const createBlog = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { dataValues: { id } } } = req.payload;
  console.log('teste', id);
  if (!title || !content || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { verificaCategorias } = await getAllCategory();
  // console.log('aqui', verificaCategorias);
  const categoryNotFound = categoryIds.every(
    (categoryId, index) => verificaCategorias[index] === categoryId,
    );
    console.log('log', categoryNotFound);
    if (!categoryNotFound) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    const createPost = await createBlog.createBlogPost(title, id, content, categoryIds);
    return res.status(201).json(createPost);
};

module.exports = { createBlogPost };