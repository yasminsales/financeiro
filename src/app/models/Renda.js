import Sequelize, { Model } from 'sequelize';

class Renda extends Model{
    static init(sequelize){
        super.init(
            {
                salario: Sequelize.DECIMAL(8,2),
                valor_extra: Sequelize.DECIMAL(8,2),
            },
            {
                sequelize,
            }            
        );
        return this;
    };  
    
    static associate(models) {
		this.belongsTo(models.Despesafixa, { foreignKey: 'despesafixa_id'}); // isso quer dizer que uma model de usuário pertence a um file
	}

    static associate(models) {
		this.belongsTo(models.Despesavariavel, { foreignKey: 'despesavariavel_id'}); // isso quer dizer que uma model de usuário pertence a um file
	}

}

export default Renda;