const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Tech {
    _id: ID
    name: String
  }
  type Matchup {
  _id:ID
  tech1:String
  tech2:String
  tech1_votes:Int
  tech2_votes:Int
}
  type Query {
    allTech:[Tech]
    allMatchups:[Matchup]
    oneMatchup(matchId:ID!):Matchup
    test: String
  }
  type Mutation {
    createMatchup (tech1:String!, tech2: String!):Matchup
    createVote (matchId:ID!, techNum:Int!):Matchup
  }
`;

module.exports = typeDefs;