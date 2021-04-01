export const isDevelopment =
  (process ? process.env.NODE_ENV : import.meta.env) === "development";

export const baseUrl = import.meta.env.SNOWPACK_PUBLIC_BASE_URL;
