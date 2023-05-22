import { Sequelize, Model } from "sequelize";

class Relatorio extends Model {
  static init (sequelize) {
    super.init({
      dataInicio: Sequelize.DATE,
      dataFim: Sequelize.DATE,
      valorTotal: Sequelize.FLOAT,
    },
    {
      sequelize,
      name: {
        singular: 'relatorio', 
        plural: 'relatorios',
      },
    }); 
  }

  static associate(models) {
    //um relatorio pode ter varios pedidos, um pedido pode estar em varios relatorios
    this.belongsToMany(models.pedido, {through: 'relatorioPedido', foreignKey: 'idPedido'});
  } 
}

export default Relatorio;