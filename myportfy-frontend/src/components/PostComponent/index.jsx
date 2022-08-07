import { useContext, useEffect, useState } from "react";

// assets
import { BsThreeDotsVertical, BsTrashFill } from "react-icons/bs";
import { MdEdit, MdReport } from "react-icons/md";

// api
import { api } from "../../api/api";

// context
import { AuthContext } from "../../contexts/auth";

// utils
import { timeDifference } from "../../utils/time-difference";
import { setMessage } from "../../utils/set-message";

// components
import { ConfirmDelete } from "../ConfirmDeleteComponent";

// styles
import * as Styled from "./PostStyles";

export const Post = ({ props }) => {
  const { logout } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showMore, setShowMore] = useState(props.content.length < 100);
  const [isLiked, setLike] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"));

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleDeleted = () => {
    setDeleted(!isDeleted)
  }

  const toggleDelete = () => {
    setShowDelete(!showDelete)
    setError(null)
  }

  const toggleBtn = () => {
    setShowMore((prevState) => !prevState);
  };

  document.addEventListener("mouseup", function (e) {
    var options = document.getElementById("options");
    if (options !== null) {
      if (!options.contains(e.target)) {
        if (showOptions) {
          toggleOptions();
        }
      }
    }
  });

  const handleDelete = () => {
    api.delete(`/posts/${props.id}`).then((response) => {
      if(response.status === 204){
        toggleDeleted();
        toggleDelete();
      }
    }).catch((error) => {
      if (error.response.status === 403 ) {
        setError(error.response.data.message)
        setTimeout(() => {
          setMessage("Você foi desconectado por motivos de segurança.", false);
          logout();
        }, 3000);
      } else if(error.response.status !== 204){
          setError(error.response.data.message)
      }
    });
  };

  return (
    <>
      {showDelete&& (
      <ConfirmDelete 
      isOpen={showDelete} 
      toggle={toggleDelete}
      actionTitle="Você está prestes a deletar essa publicação" 
      confirmAction={handleDelete}
      errors={error}
      setDeleted={toggleDeleted}/>)}
      {isDeleted ? (
        <>

          {/* ------ Deleted post ------ */}
          <Styled.Container>
            <Styled.PostContent>
              <Styled.H2>Publicação removida</Styled.H2>
              <Styled.Texts>Esta publicação foi deletada.</Styled.Texts>
            </Styled.PostContent>
          </Styled.Container>
        </>
      ) : (
        <>
          {/* ------ Current post ------ */}
          <Styled.Container>
            <Styled.Header>
              <Styled.AuthorImage src={props.author.profilePictureURL} />
              <Styled.AuthorContentDiv>
                <Styled.H2 capitalize={true}>
                  @{props.author.username}
                </Styled.H2>
                <Styled.Texts fontSmall={true} capitalize={true}>
                  {props.author.fullName}
                  {currentUser.id === props.author.id && " • Você"}
                </Styled.Texts>
              </Styled.AuthorContentDiv>

              <Styled.PostOptionsDiv onClick={toggleOptions}>
                <BsThreeDotsVertical />

                <Styled.PostOptionsWrapper isOpen={showOptions} id="options">
                  <Styled.DivOptions>
                    <Styled.DivIcon>
                      <MdReport />
                    </Styled.DivIcon>
                    <Styled.DivText>Denunciar</Styled.DivText>
                  </Styled.DivOptions>

                  {currentUser.id === props.author.id && (
                    <>
                      <Styled.DivOptions>
                        <Styled.DivIcon>
                          <MdEdit />
                        </Styled.DivIcon>
                        <Styled.DivText>Editar</Styled.DivText>
                      </Styled.DivOptions>

                      <Styled.DivOptions>
                        <Styled.DivIcon>
                          <BsTrashFill />
                        </Styled.DivIcon>
                        <Styled.DivText onClick={() => {setShowDelete(true)}}>
                          Excluir
                        </Styled.DivText>
                      </Styled.DivOptions>
                    </>
                  )}
                </Styled.PostOptionsWrapper>
              </Styled.PostOptionsDiv>
            </Styled.Header>

            <Styled.PostContent>
              {props.title && (
                <Styled.H2 margin={true} isTitle={true}>
                  {props.title}
                </Styled.H2>
              )}

              <Styled.Texts>
                {showMore
                  ? props.content
                  : props.content.substring(0, 100) + "..." }
                  {props.content.length > 100 && (
                <Styled.ShowMore onClick={toggleBtn}>
                  {!showMore ? "Ver mais" : "Ocultar"}
                </Styled.ShowMore>
              )}
              </Styled.Texts>
              
            </Styled.PostContent>

            {props.imageURL && (
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
        </>
      )}
    </>
  );
};
