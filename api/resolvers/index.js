const userResolvers = require('./user');
const observationResolvers = require('./observation');
const familleResolvers = require('./famille');
const taxonResolvers = require('./taxon');
const pointResolvers = require('./point');
const dateResolvers = require('./date');
module.exports =  [userResolvers, observationResolvers, familleResolvers, taxonResolvers, pointResolvers, dateResolvers];