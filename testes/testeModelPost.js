const { sequelize, Post } = require('../models');

Post.findByPk(1, {include: ['usuario', 'curtiram']}).then(
    post => {
        console.log(post.toJSON())
        // console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)