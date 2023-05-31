
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

    // asssociação feita do model "BlogPost"
  users.associate = (models) => {
    /* blogPosts.belongsTo(models.User, { // essa associação indica que um post pertence a um usuário
      foreignKey: 'user_id' }); */
      users.hasMany(models.BlogPost, { // essa associação indica que um usuário pode ter vários posts
        foreignKey: 'user_id', as: 'blogPost' });
  };

    return users;
};