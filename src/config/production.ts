import { IConfig } from "../types/config.types";

const prodConfig: IConfig = {
  PORT: `${process.env.PORT}`,
  NODE_ENV: `${process.env.NODE_ENV}`,
  DATABASE: {
    NAME: `${process.env.DATABASE_NAME}`,
    USERNAME: `${process.env.DATABASE_USERNAME}`,
    PASSWORD: `${process.env.DATABASE_PASSWORD}`,
  },
};

export default prodConfig;
