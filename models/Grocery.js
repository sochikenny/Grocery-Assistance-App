module.exports = function(sequelize, DataTypes) {
  const Grocery = sequelize.define("Grocery", {
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

  return Grocery;
};
