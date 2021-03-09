export interface IConfig {
  PORT: string;
  NODE_ENV: string;
  DATABASE: IDatabaseConfig;
}

interface IDatabaseConfig {
  NAME: string;
  USERNAME: string;
  PASSWORD: string;
}
