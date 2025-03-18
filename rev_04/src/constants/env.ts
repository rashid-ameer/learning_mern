function getEnv(key: string, defaultValue?: string) {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Missing environment variable ${key}`);
  }
  return value;
}

export const PORT = getEnv("PORT");
export const MONGO_CONNECTION_URI = getEnv("MONGO_CONNECTION_URI");
export const NODE_ENV = getEnv("NODE_ENV");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
