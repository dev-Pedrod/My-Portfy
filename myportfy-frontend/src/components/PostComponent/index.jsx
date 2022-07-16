// styles
import * as Styled from "./PostStyles";

// components
import { Button } from "../ButtonComponent/ButtonStyle";

export const Post = (props) => {
    
  function dateFormat(d) {
    const dateNow = new Date();
    const postDate = new Date(d);
    const postFormattedDate = new Intl.DateTimeFormat("pt-Br", {dateStyle: "short"}).format(Date.parse(d));
        
    if (dateNow.getHours() === postDate.getHours() || postDate.getMinutes() - dateNow.getMinutes() > -1) {
        var diffMinutes = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 60));
        return `Há ${diffMinutes} minutos(s)`;
    }
    else if (dateNow.toLocaleDateString() === postDate.toLocaleDateString()) {
      var diffHours = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600) -1);
      return `Há ${diffHours} hora(s)`;
    } 
    else if (dateNow.getMonth() === postDate.getMonth() || Math.ceil(
        Math.abs(dateNow - postDate) / (1000 * 3600 * 24) - 1) <= 31) {
      var diffDays = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600 * 24) - 1);
      return `Há ${diffDays} dia(s)`;
    }
    return postFormattedDate;
  }

  return (
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
        <Styled.Texts>{dateFormat(props.createdAt)}</Styled.Texts>
        <Button to="#">Saiba mais</Button>
      </Styled.BottomDiv>
    </Styled.Container>
  );
};
