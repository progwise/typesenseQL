import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { collectionFieldInterfaceType } from './collectionFieldInterfaceType'

export const collectionObjectType = new GraphQLObjectType({
  name: 'Collection',
  description: 'Typesense collection',
  fields: {
    name: {
      type: GraphQLString
    },
    num_documents: {
      type: GraphQLInt
    },
    fields: {
      type: new GraphQLList(collectionFieldInterfaceType)
    },
  }
})