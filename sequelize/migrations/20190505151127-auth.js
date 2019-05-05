module.exports = {
  up: (queryInterface, Sequelize) => (queryInterface.createTable('auth', {
    userName: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
      field: 'user_name',
    },
    userPassword: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_password',
    },
    userToken: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_token',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'updated_at',
    },
  })),
  down: (queryInterface) => 
  (queryInterface.dropTable('auth')),
};
