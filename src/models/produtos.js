import { Sequelize, Model } from "sequelize";

class Produto extends Model {
  static init (sequelize) {
    super.init({
      nome: Sequelize.STRING,
      valor: Sequelize.FLOAT,
      categoria: Sequelize.STRING,
    },
    {
      sequelize,
      name: {
        singular: 'produto', 
        plural: 'produtos',
      },
    }); 
  }

  static associate(models) {
    //um pedido pode ter vários produtos, um produto pode estar em vários pedidos
    this.belongsToMany(models.pedido,  { through: 'pedidoProduto', foreignKey: 'idProduto'});
  } 
}

export default Produto;