const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

const createBlogPost = async (title, id, content, categoryIds) => {
  const blogCreate = await BlogPost.create({
    title,
    content,
    userId: id,
    updated: new Date(),
    published: new Date(),
  });
  await Promise.all(categoryIds.map((category) => PostCategory.create({
    postId: blogCreate.id,
    categoryId: category,
  })));
  return blogCreate;
};

module.exports = { createBlogPost };