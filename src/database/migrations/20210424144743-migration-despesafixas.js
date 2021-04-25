'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('despesafixas', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        educacao: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },   
        aluguel: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        transporte: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        internet: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },  
        alimentacao: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        agua: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        luz: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },   
        academia: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        telefonia: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });     
  },

  down:  (queryInterface) => {
     return queryInterface.dropTable('despesafixas');     
  },
};