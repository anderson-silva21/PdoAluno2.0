import { Sequelize, Model } from "sequelize";

class Produto extends Model {
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
      nome: Sequelize.STRING,
      valor: Sequelize.DECIMAL(10,2),
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

  } 
}

export default Produto;