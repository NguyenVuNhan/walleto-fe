import rootReducer from "src/reducer/rootReducer";

declare module "react-redux" {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
