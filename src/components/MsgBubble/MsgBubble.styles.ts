import styled from "styled-components";
import type { BubbleI } from "./MsgBubble.d";

export const BubbleWrapper = styled.div<BubbleI>`
  padding: 12px;
  border-radius: 16px;
  max-width: 80%;
  width: fit-content;
  line-height: 20px;
  background: ${(props) =>
    props?.ownMsg
      ? props?.theme?.color?.bubbleColor
      : props?.theme?.color?.aiColor};
  margin-left: ${(props) => props?.ownMsg && "auto"};
`;
