import Sequelize, { Model } from 'sequelize';

class Despesavariavel extends Model{
    static init(sequelize){
        super.init(
            {
                investimento: Sequelize.DECIMAL(8,2),
                lazer: Sequelize.DECIMAL(8,2),
                saude: Sequelize.DECIMAL(8,2),                
                medicamento: Sequelize.DECIMAL(8,2),
            },
            {
                sequelize,
            }            
        );
        return this;
    };    
}

export default Despesavariavel;