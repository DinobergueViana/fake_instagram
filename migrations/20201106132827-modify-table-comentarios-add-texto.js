'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
                                  // tabela         coluna 
    return queryInterface.addColumn('comentarios', 'texto',{
      type:Sequelize.STRING,
      allowNull:false
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // remover de: comentarios; a coluna: texto
    return queryInterface.removeColumn('comentarios','texto');

  }
};
