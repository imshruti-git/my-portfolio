import type { BubbleI } from "./MsgBubble.d";
import { BubbleWrapper } from "./MsgBubble.styles";

export default function MsgBubble({ children, ownMsg }: BubbleI) {
  return <BubbleWrapper ownMsg={ownMsg}>{children}</BubbleWrapper>;
}
