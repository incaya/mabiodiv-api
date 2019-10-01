var { TaxonLoader } = require('../loaders/taxon');
var { UserLoader } = require('../loaders/user');

module.exports =  {
    Query: {
      observations: async (parent, args, { models }) => {
        return await models.Observation.findAll();
      },
      observation: async (parent, { id }, { models }) => {
        return await models.Observation.findByPk(id);
      },
    },
    Mutation: {
      createObservation: async (parent, { date, point }, { me, models }) => {
        return await models.Observation.create({
          date: new Date(date),
          point,
          taxonId: 1,
          userId: 1,
        });
      },
      deleteObservation: async (parent, { id }, { models }) => {
        return await models.Observation.destroy({ where: { id } });
      },
    },
    Observation: {
      user: async (observation, args, { models }) => {
        return await UserLoader.load(observation.userId);
      },
      taxon: async (observation, args, { models }) => {
        return await TaxonLoader.load(observation.taxonId);
      },
      // taxon: async (observation, args, { models }) => {
      //   return await models.Taxon.findByPk(observation.taxonId);
      // },
    },
  };