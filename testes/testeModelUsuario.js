const { sequelize, Usuario } = require('../models');

Usuario.findByPk(1, {include:'posts'}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)