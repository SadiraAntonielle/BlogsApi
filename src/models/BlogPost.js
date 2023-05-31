
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  // asssociação feita do model "BlogPost"
  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, { // essa associação indica que um post pertence a um usuário
      foreignKey: 'user_id', as: 'user' });
      /* blogPosts.hasMany(models.BlogPost, { // essa associação indica que um usuário pode ter vários posts
        foreignKey: 'user_id' }); */
  };

  return blogPosts;
};
