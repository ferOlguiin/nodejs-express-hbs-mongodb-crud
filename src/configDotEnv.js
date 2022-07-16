import {config} from "dotenv";

config();

export const URI_MONGODB = process.env.URI_MONGODB;
export const PORT = process.env.PORT;