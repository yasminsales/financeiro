import * as Yup from 'yup';
import Renda from '../models/Renda';

class RendaController{
    async store(request, response){
        const schema = Yup.object().shape({
            salario: Yup.number().required(),
            valor_extra: Yup.number(),
        });

        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'Informe o valor do salário apenas números'});
        }
        
        const {id, salario, valor_extra} = await Renda.create(request.body);

        return response.json({
            id,
            salario,
            valor_extra
        });
    }      
    

    async update(request, response) {

		
		const renda = await Renda.findByPk(request.userId); 	
        

        const {id, salario, valor_extra} = await renda.update(request.body);

        return response.json({
            id,
			salario,
			valor_extra
		});
    }

    async query(request, response) {
		const rendas = await Renda.findAll({usuario: request.usuarioId}); 	

        return response.json(rendas);
    }

    async delete(request, response) {
		const renda = await Renda.findByPk(request.body.id); 	
        renda.destroy();

        return response.json({success: true});
    }
}

export default new RendaController();