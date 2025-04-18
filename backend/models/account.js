'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Account.init({
    company_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    normal_balance: DataTypes.STRING,
    parent_account_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    currency_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};