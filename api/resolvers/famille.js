module.exports =  {
    Query: {
      familles: async (parent, args, { models }) => {
        return await models.Famille.findAll();
      },
      famille: async (parent, { id }, { models }) => {
        return await models.Famille.findByPk(id);
      },
    },
    Famille: {
      taxons: async (famille, args, { models }) => {
        return await models.Taxon.findAll({
          where: {
            familleId: famille.id,
          },
        });
      },
    },
  };