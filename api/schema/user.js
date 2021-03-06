const { gql } = require('apollo-server-micro');
module.exports =  gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  type User {
    id: ID!
    username: String!
    observations: [Observation!]
  }
`;