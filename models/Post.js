module.exports = (sequelize, DataTypes) => {

    // cria o model de post 
    const post = sequelize.define(
        'Post',
        {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        },
        {
            tableName: "posts",
            timestamps: false
        }
    );

    post.associate = (models) => {
        post.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuarios_id'});
    }

    return post;
}