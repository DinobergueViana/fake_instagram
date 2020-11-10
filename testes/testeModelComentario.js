const { sequelize, Comentario } = require('../models');

Comentario.findAll({include: 'autor'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)