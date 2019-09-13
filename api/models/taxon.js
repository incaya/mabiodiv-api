const taxon = (sequelize, DataTypes) => {
    const Taxon = sequelize.define('taxon', {
      name: {
        type: DataTypes.STRING,
      },
    });
    Taxon.associate = models => {
        Taxon.belongsTo(models.Famille);
    };
    return Taxon;
  };
module.exports =  taxon;