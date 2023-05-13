import { Sequelize, Model } from "sequelize";

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        valor: Sequelize.DECIMAL(10, 2),
        formaPagamento: Sequelize.STRING,
        nomeUsuario: Sequelize.STRING,
        observacao: Sequelize.STRING,
        cpfUsuario: {
          type: Sequelize.STRING,
          validate: {
            len: 11,
            msg: "CPF inválido",
            allowNull: false,
          },
        },
        nomeProduto: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "pedido", 
        tableName: "pedidos", 
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      foreignKey: "nomeUsuario",
      as: "usuarioNome", 
    });
    this.belongsTo(models.Usuario, {
      foreignKey: "cpfUsuario",
      as: "usuarioCPF", 
    });
    this.belongsTo(models.Produto, {
      foreignKey: "nomeProduto",
      as: "produtoNome", 
    });
  }
}

export default Pedido;
