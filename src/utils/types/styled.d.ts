import "styled-components";
import { lightTheme } from "@configs/ui/theme";

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
