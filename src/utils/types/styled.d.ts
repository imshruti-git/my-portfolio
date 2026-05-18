import { lightTheme } from "@configs/ui/theme";
import "styled-components";

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  // export type DefaultTheme = typeof lightTheme;
  export interface DefaultTheme extends CustomTheme {}
}
