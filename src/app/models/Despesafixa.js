import Sequelize, { Model } from 'sequelize';

class Despesafixa extends Model{
    static init(sequelize){
        super.init(
            {
                educacao: Sequelize.DECIMAL(8,2),
                aluguel: Sequelize.DECIMAL(8,2),
                transporte: Sequelize.DECIMAL(8,2),                
                internet: Sequelize.DECIMAL(8,2),
                alimentacao: Sequelize.DECIMAL(8,2),
                agua: Sequelize.DECIMAL(8,2),
                luz: Sequelize.DECIMAL(8,2),
                academia: Sequelize.DECIMAL(8,2),
                telefonia: Sequelize.DECIMAL(8,2),
            },
            {
                sequelize,
            }            
        );
        return this;
    };    
}

export default Despesafixa;