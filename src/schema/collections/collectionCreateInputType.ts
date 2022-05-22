import { GraphQLInputObjectType, GraphQLList, GraphQLString } from "graphql";
import { collectionFieldInputType } from "./collectionFieldInputType";

export const collectionCreateInputType = new GraphQLInputObjectType({
  name: 'CollectionCreateInputType',
  fields: {
    name: {
      type: GraphQLString
    },
    fields: {
      type: new GraphQLList(collectionFieldInputType)
    }
  }
})