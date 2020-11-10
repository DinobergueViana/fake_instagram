module.exports = (sequelize, DataTypes) => {
    
    // cria o model de usuário
    const usuario = sequelize.define(
        'Usuario',
        {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING(256)
        }, 
        {
            tableName: "usuarios",
            timestamps: false
        }
    );
    
    // define o relacionamento com Post
    usuario.associate = (models) => {
        usuario.hasMany(models.Post, {as: "posts", foreignKey: "usuarios_id"});
        usuario.belongsToMany(
            models.Post,
            {
                as: 'post',
            }
        );
    }

    return usuario;
}