module.exports = function(sequelize, DataTypes) {
    var Grocery = sequelize.define("Grocery", {
      name: DataTypes.STRING,
      num_of_items: DataTypes.INTEGER,
    });
    return Grocery;
  };