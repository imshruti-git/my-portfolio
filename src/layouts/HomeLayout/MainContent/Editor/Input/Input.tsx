import { Input } from "antd";
import type { ComponentProps } from "react";
import { TextArea } from "./Input.styles";

type Props = ComponentProps<typeof Input.TextArea>;

export default function CustomInput(props: Props) {
  return <TextArea {...props} />;
}
