import { Dispatch, ReactNode, SetStateAction } from "react";
import { DefaultTheme } from "styled-components";

export interface ProviderProps {
  children: ReactNode;
}
export type Theme = "LIGHT" | "DARK";

export interface ThemeContextType {
  curTheme: Theme;
  setCurTheme: Dispatch<SetStateAction<Theme>>;
  getTheme: (curTheme: Theme) => DefaultTheme | undefined;
  toggleTheme: () => void;
}
