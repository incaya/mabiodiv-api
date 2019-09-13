module.exports =  {
    Query: {
      taxons: async (parent, args, { models }) => {
        return await models.Taxon.findAll();
      },
      taxon: async (parent, { id }, { models }) => {
        return await models.Taxon.findByPk(id);
      },
    },
    Taxon: {
      famille: async (taxon, args, { models }) => {
        return await models.Famille.findByPk(taxon.familleId);
      },
    },
  };