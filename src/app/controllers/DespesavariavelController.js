import * as Yup from 'yup';
import Despesavariavel from '../models/Despesavariavel';

class DespesavariavelController{
    async store(request, response){
        const schema = Yup.object().shape({
            investimento: Yup.number(),
            lazer: Yup.number(),
            saude: Yup.number(),
            medicamento: Yup.number(),            
        });

        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'Informe o valor da despesa apenas números'});
        }

        
        const {id, investimento, lazer, saude, medicamento} = await Despesavariavel.create(request.body);

        return response.json({
            id,
            investimento,
            lazer,
            saude,
            medicamento,
        });
    }    
}

export default new DespesavariavelController();