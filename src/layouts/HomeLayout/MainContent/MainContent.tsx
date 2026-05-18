import { Sparkles } from "lucide-react";
import Editor from "./Editor/Editor";
import {
  HeaderContent,
  InnerContent,
  ScrollableContent,
  Wrapper,
} from "./MainContent.styles";
import Shortcuts from "./Shortcuts/Shortcuts";

export default function MainContent() {
  return (
    <Wrapper>
      <InnerContent>
        <ScrollableContent>
          <HeaderContent>
            <div className="icon-wrapper">
              <Sparkles />
            </div>
            <div className="p-t"> Welcome to My Portfolio</div>
            <div className="s-t">
              Ask me anything about my experience, skills, or projects.
              <br /> Click a shortcut below to get started.
            </div>
          </HeaderContent>
          <Shortcuts />
        </ScrollableContent>
        <Editor />
      </InnerContent>
    </Wrapper>
  );
}
