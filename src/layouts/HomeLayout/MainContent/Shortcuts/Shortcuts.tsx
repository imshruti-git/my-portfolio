import MarkdownText from "@/components/MarkdownText/MarkdownText";
import MsgBubble from "@/components/MsgBubble/MsgBubble";
import useHomeContext from "@/context/Home/useHomeContext";
import { Flex } from "antd";
import { useEffect, useRef } from "react";
import { StyledCard, Wrapper } from "./Shortcut.styles";
import { shortcutsList } from "./Shortcuts.utils";
import StreamingText from "./StreamingText/StreamingText";
import useLogic from "./useLogic";

export default function Shortcuts() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { messages } = useHomeContext();
  const { getQueryAnswer } = useLogic();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Wrapper>
      <Flex gap={15} vertical align="center">
        <Flex gap={15}>
          {shortcutsList?.slice(0, 3)?.map?.((x) => (
            <StyledCard key={x?.id} onClick={() => getQueryAnswer(x)}>
              <Flex gap={10}>
                {x?.icon}
                <Flex vertical gap={10}>
                  <div className="p-t">{x?.title}</div>
                  <div className="s-t">{x?.msg}</div>
                </Flex>
              </Flex>
            </StyledCard>
          ))}
        </Flex>
        <Flex gap={15}>
          {shortcutsList?.slice(3, 5)?.map?.((x) => (
            <StyledCard key={x?.id} onClick={() => getQueryAnswer(x)}>
              <Flex gap={10}>
                {x?.icon}
                <Flex vertical gap={10}>
                  <div className="p-t">{x?.title}</div>
                  <div className="s-t">{x?.msg}</div>
                </Flex>
              </Flex>
            </StyledCard>
          ))}
        </Flex>
      </Flex>
      <Flex vertical gap={10} style={{ width: "100%" }}>
        {messages?.length > 0 &&
          messages?.map((y, idx) => {
            const isLast = idx === messages.length - 1;
            const shouldStream = isLast && !y?.ownMsg;

            return (
              <MsgBubble key={idx} ownMsg={y?.ownMsg}>
                {shouldStream ? (
                  <StreamingText text={y?.msg} />
                ) : (
                  <MarkdownText text={y?.msg} />
                )}
              </MsgBubble>
            );
          })}
        <div ref={bottomRef} />
      </Flex>
    </Wrapper>
  );
}
