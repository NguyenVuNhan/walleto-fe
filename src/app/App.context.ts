import { createContext } from "react";

export interface AppContextType {
  backDrop: boolean;
  setBackDrop: (o: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  backDrop: false,
  setBackDrop: (_) => {},
});

export default AppContext;
