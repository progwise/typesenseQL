import { GraphQLObjectType } from "graphql";
import { collectionsQueryField } from "./schema/collections/collectionsQueryField";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    collections: collectionsQueryField
  }
})