module.exports = function (sequelize, DataTypes) {
  var Grocery = sequelize.define("Grocery", {

    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    person: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });

  return Grocery;
};