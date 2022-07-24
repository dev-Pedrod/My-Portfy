import { useState } from "react";

// images
import PostImage from "../../assets/images/Post.jpg"
import PostImage2 from "../../assets/images/Post2.jpg"
import PostImage3 from "../../assets/images/Post3.jpg"

import perfil from "../../assets/images/perfil.jpg"

// styles
import * as Styled from "./PostStyles";

// components
import { Button } from "../ButtonComponent/ButtonStyle";

export const Post = () => {
  const [isShowMore, setShowMore] = useState(false)

  // test post component
  const [props] = useState({
    id: 1,
    createdAt: "2022-07-24T12:34:00.139514",
    title: "Testando o título de postagem com máximo de caract",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit esse voluptatibus. Vero rem, totam debitis et sit dolore necessitatibus eos praesentium in quas vitae explicabo laboriosam perferendis sapiente placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem eligendi tempora ea culpa veniam et consequatur, quae iusto recusandae reiciendis cumque id corporis, rem quos perspiciatis repellendus eius! Perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia ipsam molestias dolor perferendis. Exercitationem cumque, ab iusto earum modi at voluptatum tenetur rerum, maiores impedit ad voluptates! Recusandae, voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit. repellendus eius! Perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia ipsam molestias dolor perferendis. Exercitationem cumque, ab iusto earum modi at voluptatum tenetur rerum, maiores impedit ad voluptates! Recusandae, voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ImageURL: PostImage,
    author: {
        id: 3,
        username: "maria",
        fullName: "Maria Rodrigues",
        profilePictureURL: perfil,
    },
});

  const toggleBtn = () => {
    setShowMore(prevState => !prevState)
  }
    
  function dateFormat(d) {
    const dateNow = new Date();
    const postDate = new Date(d);
    const postFormattedDate = new Intl.DateTimeFormat("pt-Br", {dateStyle: "short"}).format(Date.parse(d));
        
    //get the difference in minutes
    if (dateNow.getTime() - postDate.getTime() <= 3600000) {
        var diffMinutes = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 60));
        return `Há ${diffMinutes} minuto(s)`;
    }

    //get the difference in hours
    else if (dateNow.getTime() - postDate.getTime() < 86400000) {
      var diffHours = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600) -1);
      return `Há ${diffHours} hora(s)`;
    } 

    //get the difference in days
    else if ((dateNow - postDate) / (1000 * 3600 * 24) - 1 <= 31) {
      var diffDays = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 3600 * 24) - 1);
      return `Há ${diffDays} dia(s)`;
    }
    return postFormattedDate;
  };

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

      <Styled.PostContent>
        <Styled.H2>{props.title}</Styled.H2>
        <Styled.Texts>{isShowMore? props.content : props.content.substring(0,200)+"..."}</Styled.Texts>
        <Styled.ShowMore onClick={toggleBtn}>{!isShowMore?"Ver mais": "Ocultar"}</Styled.ShowMore>
      </Styled.PostContent>

      {props.ImageURL && (
        <Styled.ImageDiv>
          <Styled.PostImage src={props.ImageURL} />
        </Styled.ImageDiv>
      )}

      <Styled.BottomDiv>
        <Styled.Texts>{dateFormat(props.createdAt)}</Styled.Texts>
        <Button to="#">Saiba mais</Button>
      </Styled.BottomDiv>
    </Styled.Container>
    


    <Styled.Container>
      <Styled.AuthorDiv>
        <Styled.AuthorImage src={props.author.profilePictureURL} />
        <Styled.AuthorContentDiv>
          <Styled.H2 capitalize={true}>@{props.author.username}</Styled.H2>
          <Styled.Texts capitalize={true}>{props.author.fullName}</Styled.Texts>
        </Styled.AuthorContentDiv>
      </Styled.AuthorDiv>

      <Styled.PostContent>
        <Styled.H2>{props.title}</Styled.H2>
        <Styled.Texts>{isShowMore? props.content : props.content.substring(0,200)+"..."}</Styled.Texts>
        <Styled.ShowMore onClick={toggleBtn}>{!isShowMore?"Ver mais": "Ocultar"}</Styled.ShowMore>
      </Styled.PostContent>

      <Styled.ImageDiv>
        <Styled.PostImage src={PostImage2} />
      </Styled.ImageDiv>

      <Styled.BottomDiv>
        <Styled.Texts>{dateFormat(props.createdAt)}</Styled.Texts>
        <Button to="#">Saiba mais</Button>
      </Styled.BottomDiv>
    </Styled.Container>

    <Styled.Container>
      <Styled.AuthorDiv>
        <Styled.AuthorImage src={props.author.profilePictureURL} />
        <Styled.AuthorContentDiv>
          <Styled.H2 capitalize={true}>@{props.author.username}</Styled.H2>
          <Styled.Texts capitalize={true}>{props.author.fullName}</Styled.Texts>
        </Styled.AuthorContentDiv>
      </Styled.AuthorDiv>

      <Styled.PostContent>
        <Styled.H2>{props.title}</Styled.H2>
        <Styled.Texts>{isShowMore? props.content : props.content.substring(0,200)+"..."}</Styled.Texts>
        <Styled.ShowMore onClick={toggleBtn}>{!isShowMore?"Ver mais": "Ocultar"}</Styled.ShowMore>
      </Styled.PostContent>

      <Styled.ImageDiv>
        <Styled.PostImage src={PostImage3} />
      </Styled.ImageDiv>

      <Styled.BottomDiv>
        <Styled.Texts>{dateFormat(props.createdAt)}</Styled.Texts>
        <Button to="#">Saiba mais</Button>
      </Styled.BottomDiv>
    </Styled.Container>
  </>
  );
};
