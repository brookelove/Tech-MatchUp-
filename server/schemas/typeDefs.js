const { gql } = require('apollo-server-express');


const typeDefs = gql`

  type Tech {
    _id: ID
    name: String
  }
  type Query {
    allTech:[Tech]
    test: String
  }
`;

module.exports = typeDefs;