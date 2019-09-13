module.exports =  {
    Query: {
      users: async (parent, args, { models }) => {
        return await models.User.findAll();
      },
      user: async (parent, { id }, { models }) => {
        return await models.User.findByPk(id);
      },
      me: async (parent, args, { models, me }) => {
        if (!me) {
          return null;
        }
        return await models.User.findByPk(me.id);
      },
    },
    User: {
      observations: async (user, args, { models }) => {
        return await models.Observation.findAll({
          where: {
            userId: user.id,
          },
        });
      },
    },
  };