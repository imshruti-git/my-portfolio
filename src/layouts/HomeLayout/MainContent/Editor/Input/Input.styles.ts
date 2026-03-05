import { Input as InputAntd } from "antd";
import styled from "styled-components";

export const TextArea = styled(InputAntd)`
  border: none;
  border-radius: 15px;
  background: inherit;
  height: 40px;
  outline: none;

  &:hover,
  &:active,
  &:focus,
  &focus:within {
    box-shadow: none;
    outline: none;
    background: inherit;
  }
`;
