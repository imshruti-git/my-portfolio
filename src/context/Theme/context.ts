import { createContext } from "react";
import type { ThemeContextType } from "./types";

const ThemeContext = createContext<ThemeContextType>({
  curTheme: "LIGHT",
  setCurTheme: () => {
    throw new Error(
      "setCurTheme function must be used within a ThemeContextProvider"
    );
  },
  getTheme: () => {
    throw new Error(
      "getTheme function must be used within a ThemeContextProvider"
    );
  },
  toggleTheme: () => {
    throw new Error(
      "getTheme function must be used within a ThemeContextProvider"
    );
  },
});

export default ThemeContext;
