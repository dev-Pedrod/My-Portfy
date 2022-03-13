import * as Styled from "./AppElements";
import { Heading } from "./components/Heading";
import { LogoLink } from "./components/LogoLink";
import { MenuLink } from "./components/MenuLink";
import { TextComponent } from "./components/TextComponent";
import Logo from './assets/images/logo.svg'


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

        <LogoLink text="My Portfy" link="/" srcImg={Logo}>
        </LogoLink>

      </Styled.Wrapper>
    </div>
  );
}

export default App;
