import { HomeElementsContainer } from "../Home/Home.Style";
import Articles from "../../components/Articles/Articles";
import HomeElements from "../../components/HomeElements/HomeElements";

export default function Home() {
  return (
    <>
      <Articles />
      <HomeElementsContainer>
        <HomeElements />
      </HomeElementsContainer>
    </>
  );
}
