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
    //this.hasMany(models.Pedidos);
  } 
}

export default Produto;