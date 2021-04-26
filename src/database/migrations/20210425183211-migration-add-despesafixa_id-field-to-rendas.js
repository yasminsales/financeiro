'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(    //informo em qual tabela quero adicionar a coluna "avatar_id"
      'rendas',
      'despesafixa_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'despesafixas', key: 'id'}, // referencio a minha chave estrangeira 
        onUpdate: 'CASCADE', // caso for alterada eu vou informar aqui dentro tbm
        onDelete: 'SET NULL', // caso a imagem for apagada a coluna "avatar_id" vai ficar como SET NULL
        alloNull: true,
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('rendas', 'despesafixa_id');
  }
};
