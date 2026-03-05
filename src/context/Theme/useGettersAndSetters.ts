import { darkTheme, lightTheme } from "@configs/ui/theme";
import { useState } from "react";
import type { DefaultTheme } from "styled-components";
import type { Theme, ThemeContextType } from "./types";

export default function useGettersAndSetters(): Omit<
  ThemeContextType,
  "children"
> {
  const [curTheme, setCurTheme] = useState<Theme>("LIGHT");

  function getTheme(curTheme: string): DefaultTheme | undefined {
    switch (curTheme) {
      case "LIGHT":
        return lightTheme;
      case "DARK":
        return darkTheme;
    }
  }

  function toggleTheme() {
    setCurTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
  }

  return { curTheme, setCurTheme, getTheme, toggleTheme };
}
