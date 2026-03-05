import MsgBubble from "@/components/MsgBubble/MsgBubble";
import useHomeContext from "@/context/Home/useHomeContext";
import { Flex } from "antd";
import { StyledCard, Wrapper } from "./Shortcut.styles";
import { shortcutsList } from "./Shortcuts.utils";
import useLogic from "./useLogic";

export default function Shortcuts() {
  const { messages } = useHomeContext();
  const { getQueryAnswer } = useLogic();

  return (
    <Wrapper>
      <Flex gap={10}>
        {shortcutsList?.map((x) => (
          <StyledCard key={x?.id} onClick={() => getQueryAnswer(x)}>
            {x?.title}
          </StyledCard>
        ))}
      </Flex>
      <Flex vertical gap={10}>
        {messages?.length > 0 &&
          messages?.map((y) => (
            <MsgBubble key={y?.id} ownMsg={y?.ownMsg}>
              {y?.msg}
            </MsgBubble>
          ))}
      </Flex>
    </Wrapper>
  );
}
