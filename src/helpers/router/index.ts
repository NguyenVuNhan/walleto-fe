import history from "src/provider/history";

export const forwardTo = (location: string): void => {
  history.push(location);
};

export const toLogin = (): void => {
  forwardTo("/login");
};
