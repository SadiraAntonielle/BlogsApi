'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesPost = queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    });

    return categoriesPost;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('posts_categories');
  }
};
