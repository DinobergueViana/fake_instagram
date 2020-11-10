module.exports = (sequelize, DataTypes) => {

    // cria o model de Comentario
    const comentario = sequelize.define(
        'Comentario',
        {
            texto: DataTypes.TEXT(100),
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        },
        {
            tableName: 'comentarios',
            timestamps: false
        }
    );

    // define o relacionamento com Usuario
    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario, {as: 'autor', foreignKey: 'usuarios_id'});
    }

    return comentario;
}