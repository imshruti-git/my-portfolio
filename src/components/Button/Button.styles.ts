import { Button } from "antd";
import styled from "styled-components";
import type { PropsI } from "./Button.d";

export const ButtonStyled = styled(Button)<PropsI>`
  &.ant-btn {
    // COMMON
    font-size: 16px;
    height: 36px;
    box-shadow: none;

    // DEFAULT
    &-default {
      color: #666666;
      border-color: #c4c4c4;
    }

    // PRIMARY
    &-primary {
      background: #376af5;
    }

    // COMBINED
    &-default,
    &-primary {
      font-weight: 500;
    }

    // DISABLED
    &:disabled {
      background: #8494f7ff;
      color: #ffffff;
      border-color: #8494f7ff;
    }
  }
`;
