'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tarefas', [
      {
        nome_tarefa: 'Estudar Sequelize',
        data_limite: '2025-06-15',
        hora_limite: '14:00:00',
        resp_ext: 'João Silva',
        criticidade: 'Alta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_tarefa: 'Revisar código do projeto',
        data_limite: '2025-06-20',
        hora_limite: '16:30:00',
        resp_ext: 'Maria Oliveira',
        criticidade: 'Média',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Tarefas', null, {});
     
  }
};
