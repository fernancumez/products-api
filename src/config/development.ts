import dotenv from "dotenv";
import { IConfig } from "../types/config.types";
const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") dotenv.config();

const devConfig: IConfig = {
  PORT: `${process.env.PORT}`,
  NODE_ENV: `${process.env.NODE_ENV}`,
  DATABASE: {
    NAME: `${process.env.DATABASE_NAME}`,
    USERNAME: `${process.env.DATABASE_USERNAME}`,
    PASSWORD: `${process.env.DATABASE_PASSWORD}`,
  },
};

export default devConfig;
