import { useState } from "react";

// assets
import { BsThreeDotsVertical } from 'react-icons/bs';

// styles
import * as Styled from "./PostStyles";

export const Post = ({ props }) => {
  const [isShowMore, setShowMore] = useState(props.content.length < 200);
  const [isLiked, setLike] = useState(false);
  let currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))
  
  const toggleBtn = () => {
    setShowMore((prevState) => !prevState);
  };

  function dateFormat(d) {
    const dateNow = new Date();
    const postDate = new Date(d);
    const postFormattedDate = new Intl.DateTimeFormat("pt-Br", {
      dateStyle: "short",
    }).format(Date.parse(d));

    //get the difference in minutes
    if (dateNow.getTime() - postDate.getTime() <= 3600000) {
      var diffMinutes = Math.ceil(Math.abs(dateNow - postDate) / (1000 * 60));
      return `Há ${diffMinutes} minuto(s)`;
    }

    //get the difference in hours
    else if (dateNow.getTime() - postDate.getTime() < 86400000) {
      var diffHours = Math.ceil(
        Math.abs(dateNow - postDate) / (1000 * 3600) - 1
      );
      return `Há ${diffHours} hora(s)`;
    }

    //get the difference in days
    else if ((dateNow - postDate) / (1000 * 3600 * 24) - 1 <= 31) {
      var diffDays = Math.ceil(
        Math.abs(dateNow - postDate) / (1000 * 3600 * 24) - 1
      );
      return `Há ${diffDays} dia(s)`;
    }
    return postFormattedDate;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.AuthorImage src={props.author.profilePictureURL} />
        <Styled.AuthorContentDiv>
          <Styled.H2 capitalize={true}>@{props.author.username}</Styled.H2>
          <Styled.Texts fontSmall={true} capitalize={true}>{props.author.fullName}</Styled.Texts>
        </Styled.AuthorContentDiv>
        <Styled.PostOptions>
          <BsThreeDotsVertical/>
        </Styled.PostOptions>
      </Styled.Header>

      <Styled.PostContent>
        {props.title&& (<Styled.H2 margin={true} isTitle={true}>{props.title}</Styled.H2>)}

        <Styled.Texts>
          {isShowMore ? props.content : props.content.substring(0, 100) + "..."}
        </Styled.Texts>
        {props.content.length < 200 ? (
          <></>
        ) : (
          <Styled.ShowMore onClick={toggleBtn}>
            {!isShowMore ? "Ver mais" : "Ocultar"}
          </Styled.ShowMore>
        )}
      </Styled.PostContent>
      
      {props.imageURL &&(
        <Styled.ImageDiv>
        <Styled.PostImage src={props.imageURL} />
      </Styled.ImageDiv>
      )}
      

      <Styled.BottomDiv>
        <Styled.BoostDiv onClick={() => setLike(!isLiked)}>
          {isLiked ? <Styled.LightningFill /> : <Styled.Lightning />}
          <Styled.H2>Boost</Styled.H2>
        </Styled.BoostDiv>

        <Styled.Texts fontSmall={true}>
          {dateFormat(props.createdAt)}
        </Styled.Texts>
      </Styled.BottomDiv>
    </Styled.Container>
  );
};
