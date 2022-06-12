import { gql } from "@apollo/client"

export const CREATE_VOTE = gql `
createVote(matchId: $matchId, techNum: $techNum) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
`