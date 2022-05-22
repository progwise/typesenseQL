import { GraphQLObjectType } from "graphql";
import { collectionCreateMutationField } from "./collections/collectionCreateMutationField";
import { collectionDeleteMutationField } from "./collections/collectionDeleteMutationField";

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    collectionCreate: collectionCreateMutationField,
    collectionDelete: collectionDeleteMutationField
  }
})