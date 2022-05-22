import { GraphQLSchema } from "graphql";
import { mutation } from "./mutation";
import { query } from "./query";

export const typesenseSchema = new GraphQLSchema({
  query,
  mutation
})
