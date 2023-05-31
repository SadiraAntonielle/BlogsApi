'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = queryInterface.createTable('users',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: Sequelize.STRING,
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: Sequelize.STRING,
    });

    return users;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  },
};
