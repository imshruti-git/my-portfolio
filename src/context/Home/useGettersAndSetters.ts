import type { ConversationI } from "@/utils/types/conversation";
import { useState } from "react";

export default function useGettersAndSetters() {
  const [messages, setMessages] = useState<ConversationI[]>([]);
  return { messages, setMessages };
}
