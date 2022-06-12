const {Tech} = require("../models")

const resolvers = {
  Query: {
    test: () => {
        return "test"
    },
    allTech: async () => {
      return await Tech.find()
    }
  },


};

module.exports = resolvers;