import useHomeContext from "@/context/Home/useHomeContext";
import type { ConversationI } from "@/utils/types/conversation";
import { queryAnswers } from "./Shortcuts.utils";

export default function useLogic() {
  const { setMessages, messages } = useHomeContext();
  // FUNCTIONS
  function getQueryAnswer(query: ConversationI) {
    // add own msg in list
    setMessages((cur) => [...cur, query]);
    setTimeout(() => {
      const foundAnswer = queryAnswers?.find((x) => x?.id === query?.id);
      if (!foundAnswer) {
        return;
      }
      console.log(foundAnswer, "### this is id");
      setMessages((cur) => [...cur, foundAnswer]);
    }, [900]);
  }

  console.log(messages, "messages");
  return { getQueryAnswer };
}
