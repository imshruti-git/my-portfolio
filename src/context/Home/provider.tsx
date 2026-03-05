import HomeContext from "./context";
import type { ProviderProps } from "./types";
import useGettersAndSetters from "./useGettersAndSetters";

export default function HomeContextProvider({ children }: ProviderProps) {
  return (
    <HomeContext.Provider value={useGettersAndSetters()}>
      {children}
    </HomeContext.Provider>
  );
}
