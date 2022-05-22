import { GraphQLList, GraphQLString } from "graphql";
import { getTypesenseCollections } from "../../typesense/getTypesenseCollections";
import { collectionObjectType } from "./collectionObjectType";

export const collectionsQueryField = {
  type: new GraphQLList(collectionObjectType),
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (_source: unknown, { name }: { name?: string }) => getTypesenseCollections(name),
}