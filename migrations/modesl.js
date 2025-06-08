'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { // Aqui 'Sequelize' é o segundo argumento
    // Adiciona a coluna 'data_limite' à tabela 'tasks'
    await queryInterface.createTable('tasks', 'data_limite', {
      type: Sequelize.DATE, // Mude para Sequelize.DATE
      allowNull: true // Geralmente, datas limite podem ser nulas
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove a coluna 'data_limite' da tabela 'tasks'
    await queryInterface.removeColumn('tasks', 'data_limite');
  }
};