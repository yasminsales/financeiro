"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("rendas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      salario: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
      },
      valor_extra: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,        
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

  down: async (queryInterface, Sequelize) => {
    
    
  },
};
