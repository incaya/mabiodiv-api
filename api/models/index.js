require('dotenv').config();

const Sequelize = require('sequelize');
const userModel = require('./user');
const observationModel = require('./observation');
const familleModel = require('./famille');
const taxonModel = require('./taxon');

const sequelize = new Sequelize(
  //process.env.DATABASE_NAME, // 
  process.env.database_name,
  //process.env.DATABASE_USER, // 
  process.env.database_user,
  //process.env.DATABASE_PASSWORD, 
  process.env.database_password,
  {
    host: process.env.database_host,
    //process.env.DATABASE_PORT, 
    dialect: 'postgres',
  },
);

module.exports.sequelize = sequelize;

const models = {
  User: sequelize.import('../models/user'),
  Observation: sequelize.import('../models/observation'),
  Famille: sequelize.import('../models/famille'),
  Taxon: sequelize.import('../models/taxon'),
};

module.exports.models = models;

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
