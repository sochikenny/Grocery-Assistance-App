module.exports = function(sequelize, DataTypes) {
  var grocery = sequelize.define("grocery", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });

  return grocery;
};
