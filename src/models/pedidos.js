import { Sequelize, Model } from "sequelize";

class Pedido extends Model {
  static init (sequelize) {
    super.init({
      initials: {
        type: Sequelize.VIRTUAL,
        get() {
          const match = this.nome.split(" ");

          if(match.length > 1) {
            return `${match[0][0]}${match[match.length - 1][0]}`;
          } else {
            return match[0][0];
          }
        }
      },
      data: Sequelize.DATE,
      valor: Sequelize.DECIMAL(10,2),
      formaPagamento: Sequelize.STRING,
      nome: Sequelize.STRING,
      observacao: Sequelize.STRING,
      
    },
    {
      sequelize,
      name: {
        singular: 'pedido', 
        plural: 'pedidos',
      },
    }); 
  }

  static associate(models) {

  } 
}

export default Pedido;