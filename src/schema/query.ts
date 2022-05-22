import { GraphQLObjectType } from "graphql";
import { collectionsQueryField } from "./collections/collectionsQueryField";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    collections: collectionsQueryField
  }
})