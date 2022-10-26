import {ServiceType} from "../types/serviceType";
import {api} from "../api/api";
import {AxiosError} from "axios";

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
