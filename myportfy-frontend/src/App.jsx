import { Heading } from "./components/Heading";
import * as Styled from "./AppElements";

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Testando o Heading</Heading>
        <Heading colorDark={false} as="h2" size="big" uppercase={true}>
          Testando o Heading
        </Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
