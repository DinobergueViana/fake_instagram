'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable('comentarios', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      usuarios_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'usuarios'
          },
          key: 'id'
        }
      },
      posts_id:{
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'posts'
          },
          key: 'id'
        }
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.dropTable('comentarios');

  }

  
};
