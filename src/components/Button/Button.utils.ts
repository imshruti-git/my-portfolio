import type { PropsI } from "./Button.d";

function numToPx(num?: string | number): string | undefined {
  if (!num) return;
  return typeof num === "number" ? `${num}px` : num;
}

export function getStyles(props: PropsI) {
  const width = numToPx(props?.width);
  const minWidth = numToPx(props?.minWidth);
  const height = numToPx(props?.height);
  return {
    ...(width ? { width } : {}),
    ...(minWidth ? { minWidth } : {}),
    ...(height ? { height } : {}),
    ...props?.style,
  };
}

export function getClassName(props: PropsI) {
  // if (!props?.color) return;
  return `${props?.className} ant-btn-color-${props?.color}`;
}
