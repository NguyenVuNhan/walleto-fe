export const isDevelopment =
  import.meta.env.SNOWPACK_PUBLIC_MODE === "development";

export const baseUrl = import.meta.env.SNOWPACK_PUBLIC_BASE_URL;
