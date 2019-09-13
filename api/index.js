const { ApolloServer } = require('apollo-server-micro');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
var { models, sequelize } = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    models,
  }),
  introspection: true,
  playground: true,
});

// const eraseDatabaseOnSync = true;
// sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
//   if (eraseDatabaseOnSync) {
//     createTaxons();
//     createUsersWithObservations();
//   }  
//   // app.listen({ port: 8000 }, () => {
//   //   console.log('Apollo Server on http://localhost:8000/api');
//   // })
// });

module.exports = server.createHandler({ path: '/api' });

// const createTaxons = async () => {
//   await models.Famille.create(
//     {
//       name: 'Papillons',
//       taxons: [
//         {
//           name: 'Machaon',
//         },
//         {
//           name: 'Piéride du chou',
//         },
//       ],
//     },
//     {
//       include: [models.Taxon],
//     },
//   );
// };

// const createUsersWithObservations = async () => {
//   await models.User.create(
//     {
//       username: 'timi',
//       observations: [
//         {
//           date: '2019-07-01 15:00:00',
//           point: { type: 'Point', coordinates: [49.180806,-0.363836]},
//           taxonId: 1
//         },
//       ],
//     },
//     {
//       include: [models.Observation],
//     },
//   );
//   await models.User.create(
//     {
//       username: 'tibi',
//       observations: [
//         {
//           date: '2019-07-15 10:00:00',
//           point: { type: 'Point', coordinates: [49.17115,-0.349158]},
//           taxonId: 2
//         },
//       ],
//     },
//     {
//       include: [models.Observation],
//     },
//   );
// };
