const famille = (sequelize, DataTypes) => {
    const Famille = sequelize.define('famille', {
      name: {
        type: DataTypes.STRING,
      },
    });
    Famille.associate = models => {
        Famille.hasMany(models.Taxon, { onDelete: 'CASCADE' });
    };
    return Famille;
  };
module.exports =  famille;