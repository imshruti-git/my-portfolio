import ThemeContext from "./context";
import type { ProviderProps } from "./types";
import useGettersAndSetters from "./useGettersAndSetters";

export default function ThemeContextProvider({ children }: ProviderProps) {
  return (
    <ThemeContext.Provider value={useGettersAndSetters()}>
      {children}
    </ThemeContext.Provider>
  );
}
