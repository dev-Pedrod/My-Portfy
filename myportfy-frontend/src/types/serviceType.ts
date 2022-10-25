export type ServiceType<T> = {
  onSuccess?: Function;
  onError?: Function;
  data?: T;
}
