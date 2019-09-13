const { gql } = require('apollo-server-micro');
module.exports =  gql`
  extend type Query {
    taxons: [Taxon!]
    taxon(id: ID!): Taxon
  }
  type Taxon {
    id: ID!
    name: String!
    famille: Famille!
  }
`;