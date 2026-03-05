import Editor from "./Editor/Editor";
import { InnerContent, Wrapper } from "./MainContent.styles";
import Shortcuts from "./Shortcuts/Shortcuts";

export default function MainContent() {
  return (
    <Wrapper>
      <InnerContent>
        Welcome to my portfolio
        <Shortcuts />
        <Editor />
      </InnerContent>
    </Wrapper>
  );
}
