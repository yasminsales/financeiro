'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('despesavariavels', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        investimento: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },   
        lazer: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        saude: {
          type: Sequelize.DECIMAL(8,2),
          allowNull: true,
        },
        medicamento: {
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
     return queryInterface.dropTable('despesavariavels');     
  },
};