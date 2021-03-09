import { createConnection, getConnectionOptions } from "typeorm";
import config from "../config";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(config.NODE_ENV);

  return createConnection({
    ...connectionOptions,
    name: "default",
    database: config.DATABASE.NAME,
    username: config.DATABASE.USERNAME,
    password: config.DATABASE.PASSWORD,
  } as any);
};
