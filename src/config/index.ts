import PRODUCTION from "./production";
import DEVELOPMENT from "./development";

const { NODE_ENV } = process.env;

const verifyEnv = () => {
  if (NODE_ENV !== "production") return DEVELOPMENT;
  return PRODUCTION;
};

const currentEnv = verifyEnv();

export default currentEnv;
