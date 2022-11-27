import {ServiceType} from "../types/serviceType";
import {api} from "../api/api";
import {AxiosError} from "axios";
import {Post, updatePostType, uploadImageType} from "../types/post";

export async function getAll({onError, onSuccess, data}: ServiceType<string>) {
  return await api
    .get(`/posts${data}`)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}

export async function deletePost({onError, onSuccess, data}: ServiceType<number>) {
  return await api
    .delete(`/posts/${data}`)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}

export async function deletePostImage({onError, onSuccess, data}: ServiceType<number>) {
  return await api
    .delete(`/posts/delete-image/${data}`)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}

export async function uploadImage({onError, onSuccess, data}: ServiceType<uploadImageType>) {
  const config = {headers: {"Content-Type": `multipart/form-data;`}};
  let formData = new FormData();
  formData.append("file", data.image);

  return await api.post(`/posts/upload-image/${data.id}`, formData, config)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}

export async function createPost({onError, onSuccess, data}: ServiceType<Post>) {
  return await api
    .post("/posts", data)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}

export async function update({onError, onSuccess, data}: ServiceType<updatePostType>) {
  return await api
    .put(`/posts/${data.id}`, data.post)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}
