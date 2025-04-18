'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JournalEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JournalEntry.init({
    company_id: DataTypes.INTEGER,
    voucher_id: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE,
    posting_date: DataTypes.DATE,
    description: DataTypes.STRING,
    is_adjusting_entry: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'JournalEntry',
  });
  return JournalEntry;
};