import { Heading } from "./components/Heading";
import * as Styled from "./AppElements";
import { TextComponent } from "./components/TextComponent";
import { MenuLink } from "./components/MenuLink";

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>

        <Heading>Testando o Heading</Heading>

        <Heading colorDark={true} as="h2" size="big" uppercase={true}>
          Testando o Heading
        </Heading>

        <TextComponent>Testando texto</TextComponent>

        <MenuLink link="/" newTab={false}>Testando MenuLink</MenuLink>
        
      </Styled.Wrapper>
    </div>
  );
}

export default App;
