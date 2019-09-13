const { gql } = require('apollo-server-micro');
module.exports =  gql`
  extend type Query {
    familles: [Famille!]
    famille(id: ID!): Famille
  }
  type Famille {
    id: ID!
    name: String!
    taxons: [Taxon!]
  }
`;