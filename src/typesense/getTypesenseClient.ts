import { Client } from "typesense";
import dotenv from 'dotenv'
dotenv.config()

export const typesenseConfig = {
  host: process.env['FAPI_TYPESENSE_API_HOST'] ?? '',
  port: Number(process.env['FAPI_TYPESENSE_API_PORT']),
  protocol: process.env['FAPI_TYPESENSE_API_PROTOCOL'] ?? '',
  apiKey: process.env['FAPI_TYPESENSE_API_KEY'] ?? '',
};

export const getTypesenseClient = () => {
  return new Client({
    nodes: [
      {
        host: typesenseConfig.host,
        port: typesenseConfig.port,
        protocol: typesenseConfig.protocol,
      },
    ],
    apiKey: typesenseConfig.apiKey,
    connectionTimeoutSeconds: 2,
  });
};