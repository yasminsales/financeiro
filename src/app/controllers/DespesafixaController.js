import * as Yup from 'yup';
import Despesafixa from '../models/Despesafixa';

class DespesafixaController{
    async store(request, response){
        const schema = Yup.object().shape({
            salario: Yup.number(),
            educacao: Yup.number(),
            aluguel: Yup.number(),
            transporte: Yup.number(),
            internet: Yup.number(),
            alimentacao: Yup.number(),
            agua: Yup.number(),
            luz: Yup.number(),
            academia: Yup.number(),
            telefonia: Yup.number(),
        });

        if(!(await schema.isValid(request.body))){
            return response.status(400).json({error: 'Informe o valor da despesa apenas números'});
        }

        
        const {id, educacao, aluguel, transporte, internet, alimentacao, agua, luz, academia, telefonia} = await Despesafixa.create(request.body);

        return response.json({
            id,
            educacao,
            aluguel,
            transporte,
            internet,
            alimentacao,
            agua,
            luz,
            academia,
            telefonia,
        });
    }    
}

export default new DespesafixaController();