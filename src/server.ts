import { ApolloServer } from 'apollo-server'
import { typesenseSchema } from './schema/typesenseSchema'

const server = new ApolloServer({
  schema: typesenseSchema, csrfPrevention: true
})

const serverPort = Number(process.env['TYPESENSEQL_PORT'] ?? '4000')

server.listen(serverPort).then(({url}) => {
  console.log(`GraphQL server ready at ${url}`)
})