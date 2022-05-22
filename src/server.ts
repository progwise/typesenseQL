import { ApolloServer, gql } from 'apollo-server'
import { graphql, buildSchema } from 'graphql'
import { typesenseSchema } from './schema/typesenseSchema'


const resolvers = {
  Query: {
    hallo: () => {
      return 'hoihoi'
    }
  }
}

const server = new ApolloServer({
  schema: typesenseSchema, resolvers, csrfPrevention: true
})

server.listen().then(({url}) => {
  console.log(`GraphQL server ready at ${url}`)
})