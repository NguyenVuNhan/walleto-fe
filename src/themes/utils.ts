import { themes } from "./index";

const DEFAULT_THEME: string = "light";

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (
  variables: ITheme
) => {
  return {
    "--color-primary": variables.primary || "",
    "--color-primary-variant": variables.primaryVariant || "",
    "--color-secondary": variables.secondary || "",
    "--color-secondary-variant": variables.secondaryVariant || "",
    "--color-background": variables.background || "",
    "--color-surface": variables.surface || "",
    "--color-error": variables.error || "",
    "--color-on-primary": variables.onPrimary || "",
    "--color-on-secondary": variables.onSecondary || "",
    "--color-on-background": variables.onBackground || "",
    "--color-on-surface": variables.onSurface || "",
    "--color-on-error": variables.onError || "",
  };
};

export const extend: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;
  const root = document.documentElement;
  localStorage.setItem("color-theme", theme);

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPref = window.localStorage.getItem("color-theme");
    if (typeof storedPref === "string") {
      return storedPref;
    }
  }

  return DEFAULT_THEME;
};
