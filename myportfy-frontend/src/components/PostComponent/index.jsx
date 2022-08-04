import { useState } from "react";

// assets
import { BsThreeDotsVertical } from 'react-icons/bs';

// utils
import { timeDifference } from "../../utils/time-difference";

// styles
import * as Styled from "./PostStyles";

export const Post = ({ props }) => {
  const [isShowMore, setShowMore] = useState(props.content.length < 200);
  const [isLiked, setLike] = useState(false);
  let currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))
  
  const toggleBtn = () => {
    setShowMore((prevState) => !prevState);
  };

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
        {props.content.length > 200&& (
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
          {timeDifference(props.createdAt)}
        </Styled.Texts>
      </Styled.BottomDiv>
    </Styled.Container>
  );
};
