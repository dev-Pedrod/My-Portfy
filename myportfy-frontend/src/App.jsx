import * as Styled from "./AppElements";
import { Heading } from "./components/Heading";
import { MenuLink } from "./components/MenuLink";
import { TextComponent } from "./components/TextComponent";

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
