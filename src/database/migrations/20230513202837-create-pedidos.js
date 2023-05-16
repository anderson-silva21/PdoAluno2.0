'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      formaPagamento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      observacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
        
      },
      produto: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  },

  

  
};