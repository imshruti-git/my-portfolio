import { ConversationI } from "@/utils/types/conversation";
import { ReactNode, type Dispatch, type SetStateAction } from "react";

export interface IHomeContext {
  messages: ConversationI[];
  setMessages: Dispatch<SetStateAction<ConversationI>>;
}

export interface ProviderProps {
  children: ReactNode;
}
