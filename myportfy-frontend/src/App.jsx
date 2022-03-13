import { Heading } from "./components/Heading";
import * as Styled from "./AppElements";
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
      </Styled.Wrapper>
    </div>
  );
}

export default App;
