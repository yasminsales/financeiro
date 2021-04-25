import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Renda from '../app/models/Renda';
import Despesavariavel from '../app/models/Despesavariavel';
import Despesafixa from '../app/models/Despesafixa';
import databaseConfig from '../config/database'; //importar credenciais

const models = [User, Renda, File, Despesavariavel, Despesafixa];


class Database {
	constructor() {
		this.init();
}
	init() {
		this.connection = new Sequelize (databaseConfig); 
		
		models.map( model => model.init(this.connection))
		.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();