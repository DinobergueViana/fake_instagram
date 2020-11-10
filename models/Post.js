module.exports = (sequelize, DataTypes) => {

    // cria o model de Post 
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
    
    // cria o relacionamento com Usuario
    post.associate = (models) => {
        post.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuarios_id'});
        post.belongsToMany(
            models.Usuario, 
            {as: 'curtiram', 
            through: 'curtidas', 
            foreignKey: 'posts_id', 
            otherKey: 'usuarios_id'}
        );
    }

    return post;
}