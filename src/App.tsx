import GlobalStyles from "@configs/ui/global-styles";
import { lightTheme } from "@configs/ui/theme";
import Home from "@containers/Home/Home";
import HomeContextProvider from "@context/Home/provider";
import useThemeContext from "@context/Theme/useThemeContext";
import { ThemeProvider } from "styled-components";
import "./App.css";

export default function App() {
  const { getTheme, curTheme } = useThemeContext();

  const theme = getTheme(curTheme) || lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomeContextProvider>
        <Home />
      </HomeContextProvider>
    </ThemeProvider>
  );
}
