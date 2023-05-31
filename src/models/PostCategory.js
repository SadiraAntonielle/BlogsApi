
module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  // defini a associção da model "postCategory"
  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { // associção de muitos para muitos, pois um post pode ter várias categorias
      through: 'PostCategory', // tabela que relaciona as duas tabelas de onde veio a foreignKey
      foreignKey: 'postId', // a foreignKey que veio da model BlogPost
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, { // associção de muitos para muitos, pois uma categoria pode ter vários post
      through: 'PostCategory', // // tabela que relaciona as duas tabelas de onde veio a foreignKey
      foreignKey: 'categoryId', // a foreignKey que veio da model Category
      otherKey: 'postId',
    });
  };

  return postCategory;
};