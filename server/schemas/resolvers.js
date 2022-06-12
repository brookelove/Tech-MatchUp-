const {Tech, Matchup} = require("../models")

const resolvers = {
  Query: {
    test: () => {
        return "test"
    },
    allTech: async () => {
      // returns all tech!
      return await Tech.find()
    },
    allMatchups: async ()=>{
      return await Matchup.find()
    },
    oneMatchup: async (parent, args) => {
      return await Matchup.findById(args.matchId)
    }
  },
  Mutation: {
    createMatchup: async(parent, args) => {
      return Matchup.create(args)
    },
    createVote: async(parent, args) => {
      return await Matchup.findOneAndUpdate(
        { _id: args.matchId },
        { $inc: { [`tech${args.techNum}_votes`]: 1 } },
        { new: true }
      );
    }
    
  }

};

module.exports = resolvers;