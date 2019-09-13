const { gql } = require('apollo-server-micro');

module.exports =  gql`
  extend type Query {
    observations: [Observation!]!
    observation(id: ID!): Observation!
  }
  extend type Mutation {
    createObservation(text: String!): Observation!
    deleteObservation(id: ID!): Boolean!
  }
  type Observation {
    id: ID!
    date: Date!
    point: Point!
    user: User!
    taxon: Taxon!
  }
`;