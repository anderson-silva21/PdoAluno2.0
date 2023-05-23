'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('pedidos', 'idProduto', {
      type: Sequelize.INTEGER,
   });

    await queryInterface.addConstraint('pedidos', {
      type: 'foreign key',
      fields: ['idProduto'],
      references: {
        table: 'produtos',
        field: 'id'
      },
      name: 'fkey_id_produto',
      onDelete: 'set null',
      onUpdate: 'cascade'
   });

   await queryInterface.addColumn('pedidos', 'idUsuario', {
    type: Sequelize.INTEGER,
 });

   await queryInterface.addConstraint('pedidos', {
    type: 'foreign key',
    fields: ['idUsuario'],
    references: {
      table: 'usuarios',
      field: 'id'
    },
    name: 'fkey_id_usuario',
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