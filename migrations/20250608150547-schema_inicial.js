'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_tarefa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_limite: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hora_limite: {
        type: Sequelize.TIME,
        allowNull: false
      },
       resp_ext: {
        type: Sequelize.STRING,
        
      },
       criticidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
       hora_limite: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};