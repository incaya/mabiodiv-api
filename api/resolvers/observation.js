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
      createObservation: async (parent, { text }, { me, models }) => {
        return await models.Observation.create({
          text,
          userId: me.id,
        });
      },
      deleteObservation: async (parent, { id }, { models }) => {
        return await models.Observation.destroy({ where: { id } });
      },
    },
    Observation: {
      user: async (observation, args, { models }) => {
        return await models.User.findByPk(observation.userId);
      },
      taxon: async (observation, args, { models }) => {
        return await models.Taxon.findByPk(observation.taxonId);
      },
    },
  };