// styles
import * as Styled from "./PostStyles";

// components
import { Button } from "../ButtonComponent/ButtonStyle";

export const Post = () => {
  const [props] = useState({
    id: 1,
    createdAt: "2022-06-22T01:14:00.139514",
    title: "Post criado via endpoint",
    content: "Criei este post via endpoint",
    description: "Post de testes",
    ImageURL: opcoesImage,
    author: {
        id: 3,
        username: "maria",
        fullName: "Maria Rodrigues"
    },
})
    
  function dateFormat(d) {
    const dateNow = new Date();
    const postDate = new Date(d);
    const postFormattedDate = new Intl.DateTimeFormat("pt-Br", {dateStyle: "short"}).format(Date.parse(d));
        
    //get the difference in minutes
    if ((dateNow.getHours() === postDate.getHours()|| postDate.getMinutes() - dateNow.getMinutes() > -1) &&
    dateNow.toLocaleDateString() === postDate.toLocaleDateString()) {
        var diffMinutes = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 60));
        return `Há ${diffMinutes} minuto(s)`;
    }

    //get the difference in hours
    else if (dateNow.toLocaleDateString() === postDate.toLocaleDateString() || 
    dateNow.getTime() - postDate.getTime() < 86400000) {
      var diffHours = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600) -1);
      return `Há ${diffHours} hora(s)`;
    } 

    //get the difference in days
    else if (dateNow.getMonth() === postDate.getMonth() || 
    Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600 * 24) - 1) <= 31) {
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
