export type User = {
  id?: number;
  createdAt?: string;
  disabledAt?: string;
  updatedAt?: string;
  username: string;
  password?: Password;
  fullName: string;
  birthDate?: string;
  gender?: Gender;
  email: string;
  profilePictureURL?: string;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export type Password = {
  password: string
  confirmPassword: string;
}

export type UserError = {
  username?: string;
  password?: string;
  fullName?: string;
  birthDate?: string;
  gender?: string;
  email?: string;
}
