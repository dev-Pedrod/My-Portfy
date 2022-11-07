import {api} from "../api/api";
import {ServiceType} from "../types/serviceType";
import {AxiosError} from "axios";

export interface LoginProps {
  username: string;
  password: string;
  onSuccess?: Function;
  onError?: Function;
}

export async function forgotPassword({onError, onSuccess, data}: ServiceType<string>) {
  await api
    .post(`/auth/forgot-password?email=${data}`).then((response) => {
      onSuccess?.(response);
    }).catch((err: AxiosError) => {
      console.error(err);
      onError?.(err);
    })
}

export async function authenticate({onError, onSuccess, username, password}: LoginProps) {
  return await api
    .post("/login", {username, password}).then((response) => {
      return onSuccess ? onSuccess(response) : response;
    }).catch((err: AxiosError) => {
      console.error(err);
      return onError? onError(err) : err;
    })
}
