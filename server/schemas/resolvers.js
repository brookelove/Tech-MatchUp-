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
    }
    // oneMatchUp: async (parent, args) => {
    //   return await Matchup.findById(args.matchId)
    // }
  },


};

module.exports = resolvers;