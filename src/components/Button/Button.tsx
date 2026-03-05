import type { PropsI } from "./Button.d";
import { ButtonStyled } from "./Button.styles";
import { getClassName, getStyles } from "./Button.utils";

export default function Button({ children, ...rest }: PropsI) {
  const styles = getStyles(rest);
  const className = getClassName(rest);
  return (
    <ButtonStyled type="primary" style={styles} className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}
