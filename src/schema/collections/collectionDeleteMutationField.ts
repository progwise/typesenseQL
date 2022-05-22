import { GraphQLNonNull, GraphQLString } from "graphql";
import { getTypesenseClient } from "../../typesense/getTypesenseClient";

export const collectionDeleteMutationField = {
  type: GraphQLString,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the collection to delete'
    }
  },
  resolve:  async (_source: unknown, { name }:{name: string}) => {
    const client = getTypesenseClient()
    const result = await client.collections(name).delete()
    return `${result.name} deleted`
  }
}