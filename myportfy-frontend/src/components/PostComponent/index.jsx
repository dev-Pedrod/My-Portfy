// styles
import * as Styled from "./PostStyles";

// components
import { Button } from "../ButtonComponent/ButtonStyle";

export const Post = (props) => {

  return (
    <>
      <Styled.Container>
        <Styled.AuthorDiv>
          <Styled.AuthorImage src={props.author.profilePictureURL} />
          <Styled.AuthorContentDiv>
            <Styled.H2 capitalize={true}>@{props.author.username}</Styled.H2>
            <Styled.Texts capitalize={true}>{props.author.fullName}</Styled.Texts>
          </Styled.AuthorContentDiv>
        </Styled.AuthorDiv>

        {props.ImageURL ? (
          <Styled.ImageDiv>
            <Styled.PostImage src={props.ImageURL} />
          </Styled.ImageDiv>
        ) : (
          <></>
        )}

        <Styled.PostContent>
          <Styled.H2>{props.title}</Styled.H2>
          <Styled.Texts>{props.description}</Styled.Texts>
        </Styled.PostContent>

        <Styled.BottomDiv>
          <Styled.Texts>{props.createdAt}</Styled.Texts>
          <Button to="#">Saiba mais</Button>
        </Styled.BottomDiv>
      </Styled.Container>
    </>
  );
};
