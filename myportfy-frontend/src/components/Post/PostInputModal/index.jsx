import React, { useContext, useEffect, useState } from "react";

// api
import { api } from "../../../api/api";

// contexts
import { AuthContext } from "../../../contexts/auth";

// assets
import PeopleAvatar from "../../../assets/images/PeopleAvatar.svg"

// styles
import * as Styled from "./PostInputModalStyles";

// components
import { TextComponent } from "../../TextComponent";

// utils
import { setMessage } from "../../../utils/set-message";

export const PostModal = ({ toggle, isUpdate, postProps, toggleUpdated }) => {
  const messageUpdate = "Publicação editada com sucesso!";
  const messageCreate = "Publicação bem-sucedida! 🤩";
  const messageError = "Ops! Não foi possível finalizar a ação.. 😬";
  const currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))
  const { logout } = useContext(AuthContext);
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
  let [post, setPost] = useState({
    title: "",
    content: "",
    description: "",
    //categoriesId: []; TO DO
  });

  useEffect(() => {
    if(isUpdate){
      if(postProps !== null) {
        setPost(postProps);
        if(postProps.imageURL !== undefined) {
          setImagePreview(postProps.imageURL)
          setFileName(postProps.imageURL.substring(35,76))
        }
      }
    }
  }, [postProps, isUpdate]);

  function onChange(ev) {
    const { name, value } = ev.target;
    setPost({ ...post, [name]: value });
    if(name === "content"){
      setErrors(null)
    }
  };

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

    // Update post
    if(isUpdate){
      api.put(`/posts/${postProps.id}`, post).catch((error) => {
        if (error.response.status === 422 ) {
          setErrors(error.response.data.errors[0].message)
        }
        if (error.response.status === 403 ) {
          setErrors(error.response.data.message)
          setTimeout(() => {
            setMessage("Você foi desconectado por motivos de segurança.", false);
            logout();
          }, 3000);
        }
        if(error.response.status === 500){
          setLoading(false);
          toggle();
          toggleUpdated();
          setMessage(messageError, false)
        }
        setLoading(false);
      }).then((res) => {
        if(res.status === 200) {
          if(image === null){
            if(removeImage) {
              deleteImage(postProps.id)
            }
            toggle();
            toggleUpdated();
            setMessage(messageUpdate, true);
          } else{
            submitImage(image, postProps.id, true)
          }
        }
      });
    }

    // Create post
    else {
      window.scrollTo(0, 0);
      api.post("/posts", post).catch((error) => {
        if (error.response.status === 422 ) {
          setErrors(error.response.data.errors[0].message)
        } if (error.response.status !== 422 && error.response.status !== 201 ) {
          setErrors(error.response.data.message)
        }
        if(error.response.status === 500){
          toggle()
          setMessage(messageError, false)
        }
        setLoading(false);
      }).then((res) => {
          if(res.status === 201) {
            if(image === null){
              setMessage(messageCreate, true);
              toggle();
            } else{
              submitImage(image, res.data)
            }
          }
        });
    }
  };

  const deleteImage = (id) => {
    api.delete(`/posts/delete-image/${id}`).then((response) => {
      if(response.status === 204) {
          toggle();
          toggleUpdated();
          setMessage(messageUpdate, true);
      }
      setLoading(false);
    });
  }

  const submitImage = (image, id, isUpdate = false) => {
    setText("Processando imagem")
    const config = {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    };
    let formData = new FormData();
    formData.append("file", image);
    api.post(`/posts/upload-image/${id}`, formData, config).then((response) => {
      if(response.status === 201) {
        if(isUpdate){
          toggle();
          toggleUpdated();
          setMessage(messageUpdate, true);
        } else{
          toggle();
          setMessage(messageCreate, true);
        }
      }
      setLoading(false);
    });
  };

  return (
    <>
      <Styled.Overlay onClick={toggle} />
      <Styled.ContainerModal>
        <Styled.Header>
          {isUpdate?
          <TextComponent>Editar publicação</TextComponent>
          :
          <TextComponent>Criar publicação</TextComponent>
          }
          <Styled.HeaderBtn onClick={toggle}>
            <Styled.CloseIcon />
          </Styled.HeaderBtn>
        </Styled.Header>

        <Styled.TopDiv>
          <Styled.UserDiv>
            <Styled.AuthorImage src={currentUser? currentUser.profilePictureURL : PeopleAvatar} />
            <TextComponent>@{currentUser.username}</TextComponent>
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
            <Styled.ImagePreview src={imagePreview} />
              <TextComponent>{fileName}</TextComponent>
            </Styled.ImagePreviewDiv>
          )}

          <Styled.Footer>
            <Styled.AddImageBtn>
              <Styled.AddImage />
              Adicionar Imagem
              <Styled.AddImageInput
                type="file"
                accept="image/jpeg, image/png"
                title="Clique para adicionar"
                onChange={imageHandler}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
            </Styled.AddImageBtn>

            {isLoading?
              <Styled.LoadingDiv>
                <Styled.Loading/>
                <Styled.LoadingText>{loadingText}</Styled.LoadingText>
              </Styled.LoadingDiv>
            :
              <Styled.InputButton type="submit">
                {isUpdate? "Salvar" : "Publicar"}
              </Styled.InputButton>
            }
          </Styled.Footer>
        </Styled.PostForm>
      </Styled.ContainerModal>
    </>
  );
};
