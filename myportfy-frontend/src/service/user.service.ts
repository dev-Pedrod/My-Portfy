import {ServiceType} from "../types/serviceType";
import {api} from "../api/api";
import {AxiosError} from "axios";

export async function getUserById({onError, onSuccess, data}: ServiceType<string>) {
  return await api
    .get(`/users/${data}`)
    .then((response) => {
      return onSuccess ? onSuccess(response) : response
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError ? onError(err) : err
    })
}
