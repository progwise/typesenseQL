import { GraphQLBoolean, GraphQLDirective, GraphQLInterfaceType, GraphQLObjectType, GraphQLString } from "graphql";

export const collectionFieldInterfaceType = new GraphQLObjectType({
  name: 'CollectionField',
  description: 'Describes a field of a typesense collection',
  fields: {
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString,
      description: 'Typesense type for the field content'
    },
    optional: {
      type: GraphQLBoolean
    },
    index: {
      type: GraphQLBoolean
    },
    facet: {
      type: GraphQLBoolean
    }
  }
})