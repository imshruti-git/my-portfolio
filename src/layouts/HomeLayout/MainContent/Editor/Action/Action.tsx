import AttachmentIcon from "@/assets/icons/AttachmentIcon";
import EmojiIcon from "@/assets/icons/EmojiIcon";
import SendIcon from "@/assets/icons/SendIcon";
import UploadImageIcon from "@/assets/icons/UploadImageIcon";
import { LeftAction, RightAction, Wrapper } from "./Action.styles";

export default function Action() {
  return (
    <Wrapper>
      <LeftAction>
        <EmojiIcon />
        <AttachmentIcon />
        <UploadImageIcon />
      </LeftAction>
      <RightAction>
        <button type="submit">
          <SendIcon />
        </button>
      </RightAction>
    </Wrapper>
  );
}
