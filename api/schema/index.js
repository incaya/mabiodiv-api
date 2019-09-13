const { gql } = require('apollo-server-micro');
const userSchema = require('./user');
const observationSchema = require('./observation');
const familleSchema = require('./famille');
const taxonSchema = require('./taxon');
const pointSchema = require('./point');
const dateSchema = require('./date');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

module.exports =  [linkSchema, userSchema, observationSchema, familleSchema, taxonSchema, pointSchema, dateSchema];