import Sequelize from 'sequelize';

/**
 * Class defining the user info
 */
class AuthModel {
  /**
     * Constructor
     * @return {Object}
     * Instance of this class
     */
  constructor(db) {
    this.db = db;
    this.Op = Sequelize.Op;
    this.userModel = this.defineSchema();
  }


  /**
     * Create the user schema
     *
     * @return {Object}
     * Model of user
     */
  defineSchema() {
    const model = this.db.define('auth', {

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
    }, {
      tableName: 'auth',
    });
    return model;
  }
}

export default AuthModel;
