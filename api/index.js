const { ApolloServer } = require('apollo-server-micro');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
var { models, sequelize } = require('./models');

var fs = require('fs');
var path = require('path');    
var readline = require('readline');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    models,
  }),
  introspection: true,
  playground: true,
});

const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createTaxons();
    //createObservations();
    //createUsersWithObservations();
  }  
});

module.exports = server.createHandler({ path: '/api' });

const createTaxons = async () => {
  await models.Famille.create(
    {
      name: 'Papillons',
      taxons: [
        {
          name: 'Amaryllis',
        },
        {
          name: 'Apollons',
        },
        {
          name: 'Argus verts',
        },
        {
          name: 'Aurores',
        },
        {
          name: 'Belle-dame',
        },
        {
          name: 'Brun des pélargoniums',
        },
        {
          name: 'Carte géographique',
        },
        {
          name: 'Céphale',
        },
        {
          name: 'Citrons',
        },
        {
          name: 'Cuivrés',
        },
        {
          name: 'Demi-deuils',
        },
        {
          name: 'Ecaille chinée',
        },
        {
          name: 'Flambés',
        },
        {
          name: 'Gazé',
        },
        {
          name: 'Goutte de sang',
        },
        {
          name: 'Grand nègre des bois',
        },
        {
          name: 'Grand paon de nuit',
        },
        {
          name: 'Grande tortue',
        },
        {
          name: 'Hespérides orangés',
        },
        {
          name: 'Hespérides tachetées',
        },
        {
          name: 'Lycènes bleus',
        },
        {
          name: 'Lycènes orangés',
        },
        {
          name: 'Machaons',
        },
        {
          name: 'Mégères',
        },
        {
          name: 'Moirés',
        },
        {
          name: 'Morio',
        },
        {
          name: 'Moro-sphinx',
        },
        {
          name: 'Myrtil',
        },
        {
          name: 'Pacha à deux queues',
        },
        {
          name: 'Paon du jour',
        },
        {
          name: 'Petit mars changeant',
        },
        {
          name: 'Petit paon de nuit',
        },
        {
          name: 'Petites tortues',
        },
        {
          name: 'Piérides blanches',
        },
        {
          name: 'Procris',
        },
        {
          name: 'Robert-le-diable',
        },
        {
          name: 'Silène',
        },
        {
          name: 'Souci',
        },
        {
          name: 'Soufrés et Fluorés',
        },
        {
          name: 'Sphinx du liseron',
        },
        {
          name: 'Sphinx tête de mort',
        },
        {
          name: 'Sylvains',
        },
        {
          name: 'Tabac d\'Espagne',
        },
        {
          name: 'Tircis',
        },
        {
          name: 'Tristan',
        },
        {
          name: 'Vulcain',
        },
            
      ],
    },
    {
      include: [models.Taxon],
    },
  );
  await models.Famille.create(
    {
      name: 'Bourdons',
      taxons: [
        {
          name: 'Abeille charpentière'
        },
        {
          name: 'Coucou des champs'
        },
        {
          name: 'Bourdon des pierres'
        },
        {
          name: 'Osmie cornue'
        },
        {
          name: 'Bourdon des champs'
        },
        {
          name: 'Reine de bourdon argileux'
        },
        {
          name: 'Bourdon grisé'
        },
        {
          name: 'Bourdon distingué'
        },
        {
          name: 'Bourdons vétéran'
        },
        {
          name: 'Bourdon des bois'
        },
        {
          name: 'Coucou des bois'
        },
        {
          name: 'Bourdon terrestre'
        },
        {
          name: 'Bourdon des jardins'
        },
        {
          name: 'Bourdon mâle des saussaies'
        },
        {
          name: 'Bourdon des prés'
        },
      ],
    },
    {
      include: [models.Taxon],
    },
  );
  await createObservations().then(obs => {
    models.User.create(
      {
        username: 'tibi',
        observations: obs,
      },
      {
        include: [models.Observation],
      },
    );  
  });
};

function createObservations() {
  return new Promise(function(resolve, reject) {
    var filePath = path.join(__dirname, 'data/observations.txt');

    var result = [];
    let rl = readline.createInterface({
      input: fs.createReadStream(filePath)
    });
  
    let line_no = 0;
  
    // event is emitted after each line
    rl.on('line', function(line) {
        line_no++;
        console.log(line);
        var data = line.split(';');
        result.push(
          {
            date: data[0],
            point: {
              type: "Point",
              coordinates: [Number(data[2]), Number(data[1])]
            },
            taxonId: data[3]
          }
        );
    });
  
    // end
    rl.on('close', function(line) {
        console.log('Total lines : ' + line_no);
        resolve(result);
    });
  });
}
