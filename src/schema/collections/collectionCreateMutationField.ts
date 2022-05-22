import { getTypesenseClient } from "../../typesense/getTypesenseClient"
import { collectionCreateInputType } from "./collectionCreateInputType"
import { collectionObjectType } from "./collectionObjectType"

export const collectionCreateMutationField = {
  type: collectionObjectType,
  args: {
    inputArgs: {
      type: collectionCreateInputType
    }
  },
  resolve:  async (_source: unknown, { inputArgs }:any) => {
    const newSchema = {
      name: inputArgs.name,
      default_sorting_field: inputArgs.default_sorting_field,
      fields: inputArgs.fields.map((graphQLField: any) => ({
        name: graphQLField.name,
        type: graphQLField.type,
        facet: graphQLField.facet,
      }))
    }
    const client = getTypesenseClient()
    await client.collections().create(newSchema)
    const readback = await client.collections(inputArgs.name).retrieve()

    return readback
  }
}
