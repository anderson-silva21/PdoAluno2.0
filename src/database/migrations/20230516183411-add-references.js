'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('pedidos', 'nomeProduto', {
      type: Sequelize.STRING,
   });

    await queryInterface.addConstraint('pedidos', {
      type: 'foreign key',
      fields: ['nomeProduto'],
      references: {
        table: 'produtos',
        field: 'nome'
      },
      name: 'fkey_nome_produto',
      onDelete: 'set null',
      onUpdate: 'cascade'
   });

   await queryInterface.addColumn('pedidos', 'nomeUsuario', {
    type: Sequelize.STRING,
 });

   await queryInterface.addConstraint('pedidos', {
    type: 'foreign key',
    fields: ['nomeUsuario'],
    references: {
      table: 'usuarios',
      field: 'nome'
    },
    name: 'fkey_nome_usuario',
    onDelete: 'set null',
    onUpdate: 'cascade'
 });

 await queryInterface.addColumn('pedidos', 'cpfUsuario', {
  type: Sequelize.STRING,
});
 
 await queryInterface.addConstraint('pedidos', {
  type: 'foreign key',
  fields: ['cpfUsuario'],
  references: {
    table: 'usuarios',
    field: 'cpf'
  },
  name: 'fkey_cpf_usuario',
  onDelete: 'set null',
  onUpdate: 'cascade'
});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
