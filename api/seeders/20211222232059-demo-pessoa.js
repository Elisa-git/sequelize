'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {          //Insere
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: "Ana Victoria Santos",
        ativo: true,
        email: "ana.victoria@email.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Shelly Fontele",
        ativo: true,
        email: "shelly.fontele@email.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ana Katarina",
        ativo: true,
        email: "ana.katarina@email.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Lilian Nascimento",
        ativo: true,
        email: "Lilian.Nascimento@email.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Christopher Douglas",
        ativo: true,
        email: "Christopher.Douglas@email.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {       //Deleta
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
