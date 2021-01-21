'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      id:{
        type:Sequelize.INTEGER(10),
        autoIncrement:true,
        primaryKey:true
    },
    featureName:Sequelize.STRING(20),
    email:Sequelize.STRING(20),
    enable:Sequelize.BOOLEAN,
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users');
  }
};
