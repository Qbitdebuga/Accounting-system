'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JournalLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JournalLine.init({
    journal_entry_id: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER,
    debit: DataTypes.DECIMAL,
    credit: DataTypes.DECIMAL,
    tax_id: DataTypes.INTEGER,
    entity_type: DataTypes.STRING,
    entity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JournalLine',
  });
  return JournalLine;
};