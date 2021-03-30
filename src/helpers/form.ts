export const numberValue = (v: string) => {
  return parseInt(v.replaceAll(",", ""), 10);
};

export const dateValue = (v: string) => {
  return new Date(v).toISOString();
};
