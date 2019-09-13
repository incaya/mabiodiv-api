const observation = (sequelize, DataTypes) => {
    const Observation = sequelize.define('observation', {
      date: {
        type: DataTypes.DATE,
      },
      point: {
        type: DataTypes.GEOMETRY('POINT'),
      },
    });
    Observation.associate = models => {
      Observation.belongsTo(models.User);
      Observation.belongsTo(models.Taxon);
    };
    return Observation;
  };
module.exports =  observation;