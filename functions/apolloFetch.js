const { createApolloFetch } = require("apollo-fetch")

module.exports = createApolloFetch({
  uri: "https://sfg.salestrekker.com/graphql",
})
