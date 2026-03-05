import MainContent from "../../layouts/HomeLayout/MainContent/MainContent";
import TopBar from "../../layouts/HomeLayout/TopBar/TopBar";
import { Wrapper } from "./Home.styles";

export default function Home() {
  return (
    <Wrapper>
      <TopBar />
      <MainContent />
    </Wrapper>
  );
}
