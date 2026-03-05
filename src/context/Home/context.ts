import { createContext } from "react";
import type { IHomeContext } from "./types";

const defaultValues: IHomeContext = {
  messages: [],
  setMessages: () => {
    throw new Error(
      "setCurTheme function must be used within a ThemeContextProvider"
    );
  },
};

const HomeContext = createContext<IHomeContext>(defaultValues);

export default HomeContext;
