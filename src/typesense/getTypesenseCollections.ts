import { getTypesenseClient } from "./getTypesenseClient"

export const getTypesenseCollections = async () => {
  const client = getTypesenseClient()
  const result = await client.collections().retrieve()
  return result
}

export const getTypesenseCollectionsMock = () => {
  return [
    {
      name: 'collection1',
      num_documents: 21,
      fields: [
        {
          name: 'field1',
          type: 'string',
          optional: true,
          index: false,
          facet: false,
        }
      ]
    },
    {
      name: 'collection2',
      num_documents: 32,
      fields: [
        {
          name: 'field2',
          type: 'bool',
          optional: false,
          index: true,
          facet: false,
        }
      ]
    }
  ]
}