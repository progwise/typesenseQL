import { GraphQLList } from "graphql";
import { getTypesenseCollections } from "../../typesense/getTypesenseCollections";
import { collectionObjectType } from "./collectionObjectType";

export const collectionsQueryField = {
  type: new GraphQLList(collectionObjectType),
  resolve: (_source: unknown, { id }: { id?: string }) => getTypesenseCollections(),
}