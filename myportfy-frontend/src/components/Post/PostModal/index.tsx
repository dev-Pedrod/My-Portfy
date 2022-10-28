import React, {useContext, useEffect, useState} from "react";
import {AxiosError, AxiosResponse} from "axios";

// api
import {
  createPost,
  deletePostImage,
  update,
  uploadImage,
} from "../../../service/post.service";

// contexts
import {AuthContext} from "../../../contexts/auth";

// assets
import PeopleAvatar from "../../../assets/images/PeopleAvatar.svg"

// styles
import * as Styled from "./styles";

// components
import {TextComponent} from "../../TextComponent";

// utils
import {setMessage} from "../../../utils/set-message";

// types
import {Post, updatePostType, uploadImageType} from "../../../types/post";

type PostModalProps = {
  toggle?: Function;
  isUpdate?: Boolean;
  postProps?: Post;
  toggleUpdated?: Function;
}

export const PostModal = ({toggle, isUpdate, postProps, toggleUpdated}: PostModalProps) => {
  const messageUpdate = "Publicação editada com sucesso!";
  const messageCreate = "Publicação bem-sucedida! 🤩";
  const messageError = "Ops! Não foi possível finalizar a ação.. 😬";
  const {logout, user} = useContext(AuthContext);
  const [errors, setErrors] = useState("");
  // loading
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setText] = useState("processando")
  // Image preview
  const [fileName, setFileName] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  // Post
  let [image, setImage] = useState(null);
  let [post, setPost] = useState<Post>({
    title: "",
    content: "",
    description: "",
    //categoriesId: []; TO DO
  });

  useEffect(() => {
    if (isUpdate) {
      if (postProps !== null) {
        setPost(postProps);
        if (postProps.imageURL !== undefined) {
          setImagePreview(postProps.imageURL)
          setFileName(postProps.imageURL.substring(35, 76))
        }
      }
    }
  }, [postProps, isUpdate]);

  function onChange(ev) {
    const {name, value} = ev.target;
    setPost({...post, [name]: value});
    if (name === "content") {
      setErrors(null)
    }
  }

  const imageHandler = (e) => {
    setFileName(e.target.files[0].name);
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isUpdate) {
      const id = postProps.id;
      updatePost({id, post})
    } else {
      savePost(post)
    }
  };

  // UPDATE POST
  const updatePost = (data: updatePostType) => {
    function onSuccess(response: AxiosResponse) {
      if (response.status === 200) {
        if (image === null) {
          if (removeImage) deleteImage(data.id)
          toggle();
          toggleUpdated();
          setMessage(messageUpdate, true);
        } else {
          const id = data.id;
          submitImage({image, id}, true)
        }
      }
    }

    function onError(err: AxiosError) {
      switch (err.response.status) {
        case 422:
          setErrors(err.response.data.errors[0].message)
          break;
        case 403:
          setErrors(err.response.data.message)
          setTimeout(() => {
            setMessage("Você foi desconectado por motivos de segurança.", false);
            logout();
          }, 3000);
          break;
        case 500:
          setLoading(false);
          toggle();
          toggleUpdated();
          setMessage(messageError, false)
          break;
      }
      setLoading(false);
    }

    update({onError, onSuccess, data})
  }

  // CREATE POST
  const savePost = (data: Post) => {
    window.scrollTo(0, 0);

    function onSuccess(response: AxiosResponse) {
      if (response.status === 201) {
        if (image === null) {
          setMessage(messageCreate, true);
          toggle();
        } else {
          const id = response.data;
          console.log(id);
          submitImage({image, id})
        }
      }
    }

    function onError(err: AxiosError) {
      switch (err.response.status) {
        case 422:
          setErrors(err.response.data.errors[0].message)
          break;
        case 500:
          toggle();
          setMessage(messageError, false);
          break;
        default:
          setErrors(err.response.data.message)
          break;
      }
      setLoading(false);
    }

    createPost({onError, onSuccess, data})
  }

  // DELETE POST IMAGE
  const deleteImage = (data: number) => {
    function onSuccess(response: AxiosResponse) {
      if (response.status === 204) {
        toggle();
        toggleUpdated();
        setMessage(messageUpdate, true);
      }
      setLoading(false);
    }

    deletePostImage({onSuccess, data})
  };

  // SAVE POST IMAGE
  const submitImage = (data: uploadImageType, isUpdate = false) => {
    setText("Processando imagem")
    console.log(data.id);

    function onSuccess(response: AxiosResponse) {
      if (response.status === 201) {
        if (isUpdate) {
          toggle();
          toggleUpdated();
          setMessage(messageUpdate, true);
        } else {
          toggle();
          setMessage(messageCreate, true);
        }
      }
      setLoading(false);
    }

    uploadImage({onSuccess, data});
  };

  return (
    <>
      <Styled.Overlay onClick={() => toggle()}/>
      <Styled.ContainerModal>
        <Styled.Header>
          {isUpdate ?
            <TextComponent>Editar publicação</TextComponent>
            :
            <TextComponent>Criar publicação</TextComponent>
          }
          <Styled.HeaderBtn onClick={() => toggle()}>
            <Styled.CloseIcon/>
          </Styled.HeaderBtn>
        </Styled.Header>

        <Styled.TopDiv>
          <Styled.UserDiv>
            <Styled.AuthorImage src={user ? user.profilePictureURL : PeopleAvatar}/>
            <TextComponent>@{user.username}</TextComponent>
          </Styled.UserDiv>

          <Styled.PostTopDiv>
            <Styled.FormLabel>Título (opcional)</Styled.FormLabel>
            <Styled.Inputs
              type="text"
              name="title"
              value={post.title}
              placeholder="Título"
              maxLength={50}
              onChange={onChange}
            />
            <Styled.FormLabel>Descrição (opcional)</Styled.FormLabel>
            <Styled.Inputs
              name="description"
              type="text"
              value={post.description}
              placeholder="Descrição"
              maxLength={100}
              onChange={onChange}
            />
          </Styled.PostTopDiv>
        </Styled.TopDiv>

        <Styled.PostForm onSubmit={handleSubmit}>
          <Styled.TextArea
            placeholder="Começar publicação"
            name="content"
            value={post.content}
            onChange={onChange}
            required
            maxLength={1500}
          />
          <Styled.ErrorMessage>{errors}</Styled.ErrorMessage>

          {imagePreview && (
            <Styled.ImagePreviewDiv>
              <Styled.ImageTrash
                title="Clique para deletar"
                onClick={() => {
                  setRemoveImage(true);
                  setImagePreview(null);
                  setImage(null);
                }}
              />
              <Styled.ImagePreview src={imagePreview}/>
              <TextComponent>{fileName}</TextComponent>
            </Styled.ImagePreviewDiv>
          )}

          <Styled.Footer>
            <Styled.AddImageBtn>
              <Styled.AddImage/>
              Adicionar Imagem
              <Styled.AddImageInput
                type="file"
                accept="image/jpeg, image/png"
                title="Clique para adicionar"
                onChange={imageHandler}
                onClick={(e) => {
                  let target = e.target as HTMLInputElement;
                  target.value = null;
                }}
              />
            </Styled.AddImageBtn>

            {isLoading ?
              <Styled.LoadingDiv>
                <Styled.Loading/>
                <Styled.LoadingText>{loadingText}</Styled.LoadingText>
              </Styled.LoadingDiv>
              :
              <Styled.InputButton type="submit">
                {isUpdate ? "Salvar" : "Publicar"}
              </Styled.InputButton>
            }
          </Styled.Footer>
        </Styled.PostForm>
      </Styled.ContainerModal>
    </>
  );
};
