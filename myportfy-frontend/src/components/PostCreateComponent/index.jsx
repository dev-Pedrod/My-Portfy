import React, { useState } from "react";

// api
import { api } from "../../api/api";

// assets
import PeopleAvatar from "../../assets/images/PeopleAvatar.svg"

// styles
import * as Styled from "./PostCreateStyles";

// components
import { TextComponent } from "../TextComponent";

// utils
import { setMessage } from "../../utils/set-message";

export const PostCreate = ({ toggle }) => {
  const [errors, setErrors] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("my-portfy:_current"))
  // Image preview
  const [fileName, setFileName] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Post
  const [image, setImage] = useState(null);
  const [post, setPost] = useState({
    title: "",
    content: "",
    description: "",
    //categoriesId: []; TO DO
  });

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
    window.scrollTo(0, 0);

    api.post("/posts", post).catch((error) => {
      if (error.response.status === 422 ) {
        setErrors(error.response.data.errors[0].message)
      } if (error.response.status !== 422 && error.response.status !== 201 ) {
        setErrors(error.response.data.message)
      } 
      if(error.response.status === 500){
        setMessage("Ops! Não foi possível publicar.. 😬", false)
        toggle()
      }
    }).then((res) => {
        if(res.status === 201) {
          setMessage("Publicação bem-sucedida! 🤩", true)
          toggle()
          if(image !== null){
            submitImage(image, res.data)
          }
        }
      });
  };

  const submitImage = (image, id) => {
    const config = {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    };
    let formData = new FormData();
    formData.append("file", image);
    api.post(`/posts/upload-image/${id}`, formData, config);
  };

  return (
    <>
      <Styled.Overlay onClick={toggle} />
      <Styled.ContainerModal>
        <Styled.Header>
          <TextComponent>Criar publicação</TextComponent>
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
              placeholder="Título"
              maxLength={50}
              onChange={onChange}
            />
            <Styled.FormLabel>Descrição (opcional)</Styled.FormLabel>
            <Styled.Inputs
              name="description"
              type="text"
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
                title={"Clique para adicionar"}
                onChange={imageHandler}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
            </Styled.AddImageBtn>

            <Styled.InputButton type="submit">Publicar</Styled.InputButton>
          </Styled.Footer>
        </Styled.PostForm>
      </Styled.ContainerModal>
    </>
  );
};
