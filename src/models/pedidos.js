import { Sequelize, Model } from "sequelize";

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        valor: Sequelize.DECIMAL(10, 2),
        formaPagamento: Sequelize.STRING,
        observacao: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "pedido", 
        tableName: "pedidos", 
      }
    );
  }

  static associate(models) {
    //um pedido pode ter vários produtos, um produto pode estar em vários pedidos
    this.hasMany(models.Produto, { foreignKey: 'idProduto' });
    //um pedido pode pertencer a apenas um usuário, um usuário pode ter varios pedidos
    this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
  }
}

export default Pedido;
