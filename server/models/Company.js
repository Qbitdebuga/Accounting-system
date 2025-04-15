// Company.js (example model)
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      default_currency: {
        type: DataTypes.STRING(3),
        defaultValue: 'USD'
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    });
  
    Company.associate = models => {
      Company.hasMany(models.User);
      Company.hasMany(models.Account);
    };
  
    return Company;
  };