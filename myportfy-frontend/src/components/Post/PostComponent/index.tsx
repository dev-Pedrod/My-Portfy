import {useContext, useState} from "react";
import {AxiosError, AxiosResponse} from "axios";

// assets
import {BsThreeDotsVertical, BsTrashFill} from "react-icons/bs";
import {MdEdit, MdReport} from "react-icons/md";

// api
import {deletePost} from "../../../service/post.service";

// context
import {AuthContext} from "../../../contexts/auth";

// utils
import {timeDifference} from "../../../utils/time-difference";
import {setMessage} from "../../../utils/set-message";

// components
import {ConfirmAction} from "../../ConfirmAction";
import {PostModal} from "../PostModal";

// styles
import * as Styled from "./styles";

// types
import {Post as PostType} from "../../../types/post";

type PostProps = {
  props: PostType;
  toggleUpdated: Function;
}

export const Post = ({props, toggleUpdated}: PostProps) => {
  const {logout, user} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showMore, setShowMore] = useState(props.content.length < 100);
  const [isLiked, setLike] = useState(false);
  const [isDeleted, setDeleted] = useState(false);

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

  const toggleUpdate = () => {
    setShowUpdate(!showUpdate)
  }

  const toggleBtn = () => {
    setShowMore((prevState) => !prevState);
  };

  const onError = (error: AxiosError) => {
    if (error.response.status === 403) {
      setError(error.response.data.message)
      setTimeout(() => {
        setMessage("Você foi desconectado por motivos de segurança.", false);
        logout();
      }, 3000);
    } else if (error.response.status !== 204) {
      setError(error.response.data.message)
    }
  }

  const onSuccess = (response: AxiosResponse) => {
    if (response.status === 204) {
      toggleDeleted();
      toggleDelete();
    }
  }

  const handleDelete = () => {
    let data = props.id
    deletePost({onError, onSuccess, data})
  };

  document.addEventListener("mouseup", function (e: MouseEvent) {
    let options = document.getElementById("options");
    if (e.target instanceof HTMLElement && options !== null && !options.contains(e.target) && showOptions) {
      toggleOptions();
    }
  })

  return (
    <>
      {showDelete && (
        <ConfirmAction
          isOpen={showDelete}
          toggle={toggleDelete}
          actionTitle="Você está prestes a deletar essa publicação"
          confirmAction={handleDelete}
          errors={error}/>)}
      {isDeleted ? (
        <>

          {/* ------ Deleted post ------ */}
          <Styled.Container>
            <Styled.PostContent>
              <Styled.H2>Publicação removida</Styled.H2>
              <Styled.Texts>Essa publicação foi deletada.</Styled.Texts>
            </Styled.PostContent>
          </Styled.Container>
        </>
      ) : (
        <>
          <Styled.Container>
            {/* ------ Update post ------ */}
            {showUpdate && (
              <PostModal
                toggle={toggleUpdate}
                isUpdate={true}
                postProps={props}
                toggleUpdated={toggleUpdated}
              />
            )}

            {/* ------ Current post ------ */}
            <Styled.Header>
              <Styled.AuthorImage src={props.author.profilePictureURL}/>
              <Styled.AuthorContentDiv>
                <Styled.H2 capitalize={true}>
                  @{props.author.username}
                </Styled.H2>
                <Styled.Texts fontSmall={true} capitalize={true}>
                  {props.author.fullName}
                  {user.id === props.author.id && " • Você"}
                </Styled.Texts>
                {props.updatedAt &&
                  <>
                    <Styled.PencilIcon/>
                    <Styled.EditSpan>• Editado</Styled.EditSpan>
                  </>
                }
              </Styled.AuthorContentDiv>

              <Styled.PostOptionsDiv onClick={toggleOptions}>
                <BsThreeDotsVertical/>
                <Styled.PostOptionsWrapper isOpen={showOptions} id="options">
                  <Styled.DivOptions>
                    <Styled.DivIcon>
                      <MdReport/>
                    </Styled.DivIcon>
                    <Styled.DivText>Denunciar</Styled.DivText>
                  </Styled.DivOptions>

                  {user.id === props.author.id && (
                    <>
                      <Styled.DivOptions>
                        <Styled.DivIcon>
                          <MdEdit/>
                        </Styled.DivIcon>
                        <Styled.DivText onClick={toggleUpdate}>
                          Editar
                        </Styled.DivText>
                      </Styled.DivOptions>

                      <Styled.DivOptions>
                        <Styled.DivIcon>
                          <BsTrashFill/>
                        </Styled.DivIcon>
                        <Styled.DivText onClick={() => {
                          setShowDelete(true)
                        }}>
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
                <Styled.H2 margin={true} capitalize={true}>
                  {props.title}
                </Styled.H2>
              )}

              <Styled.Texts>
                {showMore
                  ? props.content
                  : props.content.substring(0, 99) + "..."}
                {props.content.length > 99 && (
                  <Styled.ShowMore onClick={toggleBtn}>
                    {!showMore ? "Ver mais" : "Ocultar"}
                  </Styled.ShowMore>
                )}
              </Styled.Texts>

            </Styled.PostContent>

            {props.imageURL && (
              <Styled.ImageDiv>
                <Styled.PostImage src={props.imageURL}/>
              </Styled.ImageDiv>
            )}

            <Styled.BottomDiv>
              <Styled.BoostDiv onClick={() => setLike(!isLiked)}>
                {isLiked ? <Styled.LightningFill/> : <Styled.Lightning/>}
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
