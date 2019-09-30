const { gql } = require('apollo-server-micro');

module.exports =  gql`
  extend type Query {
    observations: [Observation!]!
    observation(id: ID!): Observation!
  }
  extend type Mutation {
    createObservation(date: String!, point: Point!): Observation!
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