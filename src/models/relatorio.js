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
  } 
}

export default Relatorio;