const { gql } = require('apollo-server-micro');

module.exports =  gql`
    scalar Point

    extend type Query {
        Point: Point
    }
`;