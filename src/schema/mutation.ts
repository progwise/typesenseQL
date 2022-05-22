import { GraphQLObjectType } from "graphql";
import { collectionCreateMutationField } from "./collections/collectionCreateMutationField";

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    collectionCreate: collectionCreateMutationField
  }
})