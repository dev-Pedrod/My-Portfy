import {api} from "../api/api";
import {ServiceType} from "../shared/types/serviceType";
import {AxiosError} from "axios";

export async function forgotPassword({onError, onSuccess, data}: ServiceType<string>) {
  await api
    .post(`/auth/forgot-password?email=${data}`).then((response) => {
      onSuccess?.(response);
    }).catch((err: AxiosError) => {
      console.error(err);
      onError?.(err);
    })
}
