import { GraphQLBoolean, GraphQLInputObjectType, GraphQLString } from "graphql";

export const collectionFieldInputType = new GraphQLInputObjectType({
  name: 'CollectionFieldInput',
  fields: {
    name: {
      type: GraphQLString
    },
    default_sorting_field: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString,
      description: 'Typesense type for the field content'
    },
    optional: {
      type: GraphQLBoolean
    },
    facet: {
      type: GraphQLBoolean
    }
  }
})