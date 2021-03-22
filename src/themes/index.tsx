import React, { createContext, FC, useEffect, useState } from "react";
import dark from "./dark";
import light from "./light";
import { applyTheme, getInitialTheme, IThemes } from "./utils";

export const themes: IThemes = {
  light,
  dark,
};

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeCtx = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (_) => {},
});

const initTheme = getInitialTheme();

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeProvider;
