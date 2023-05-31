'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });

    return categories;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('categories');
  }
};
