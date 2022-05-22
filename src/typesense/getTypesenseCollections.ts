import { getTypesenseClient } from "./getTypesenseClient"

export const getTypesenseCollections = async (name?: string) => {
  const client = getTypesenseClient()
  if (name) {
    return await [client.collections(name).retrieve()]
  }
  return await client.collections().retrieve()
}
