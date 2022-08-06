import { useState } from "react";

// assets
import { BsThreeDotsVertical, BsTrashFill } from 'react-icons/bs';
import { MdEdit, MdReport } from 'react-icons/md';

// utils
import { timeDifference } from "../../utils/time-difference";

// styles
import * as Styled from "./PostStyles";

export const Post = ({ props }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isShowMore, setShowMore] = useState(props.content.length < 200);
  const [isLiked, setLike] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleBtn = () => {
    setShowMore((prevState) => !prevState);
  };

  document.addEventListener('mouseup', function(e) {
    var options = document.getElementById('options');
    if(options !== null) {
      if (!options.contains(e.target)) {
        if(showOptions){
          toggleOptions();
        }
      }
    }
  });  

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.AuthorImage src={props.author.profilePictureURL} />
        <Styled.AuthorContentDiv>
          <Styled.H2 capitalize={true}>@{props.author.username}</Styled.H2>
          <Styled.Texts fontSmall={true} capitalize={true}>
            {props.author.fullName}{currentUser.id === props.author.id &&(" • Você")}
          </Styled.Texts>
        </Styled.AuthorContentDiv>

        <Styled.PostOptionsDiv onClick={toggleOptions}>
          <BsThreeDotsVertical/>

          <Styled.PostOptionsWrapper isOpen={showOptions} id='options'>
            <Styled.DivOptions>
                <Styled.DivIcon>
                  <MdReport/>
                </Styled.DivIcon>
                <Styled.DivText>
                    Denunciar
                </Styled.DivText>
              </Styled.DivOptions>

              {currentUser.id === props.author.id &&(<>
              <Styled.DivOptions>
                <Styled.DivIcon>
                  <MdEdit/>
                </Styled.DivIcon>
                <Styled.DivText>
                    Editar
                </Styled.DivText>
              </Styled.DivOptions>

              <Styled.DivOptions>
                <Styled.DivIcon>
                  <BsTrashFill/>
                </Styled.DivIcon>
                <Styled.DivText>
                    Excluir
                </Styled.DivText>
              </Styled.DivOptions></>)}
          </Styled.PostOptionsWrapper>

        </Styled.PostOptionsDiv>
      </Styled.Header>

      <Styled.PostContent>
        {props.title&& (<Styled.H2 margin={true} isTitle={true}>{props.title}</Styled.H2>)}

        <Styled.Texts>
          {isShowMore ? props.content : props.content.substring(0, 100) + "..."}
        </Styled.Texts>
        {props.content.length > 100&& (
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
