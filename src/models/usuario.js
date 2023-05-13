import { Sequelize, Model } from "sequelize";

class Usuario extends Model {
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
      email: Sequelize.STRING,
      cpf: {
        type: Sequelize.STRING,
        validate:{
          len: 11,
          msg: "CPF invalido",
          allowNull: false,
       }
      },
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      
    },
    {
      sequelize,
      name: {
        singular: 'usuario', 
        plural: 'usuarios',
      },
    }); 
  }

  static associate(models) {
    //this.hasMany(models.Pedido);
  } 
}

export default Usuario;