export type User = {
  id: number;
  createdAt: string;
  disabledAt: string;
  updatedAt: string;
  username: string;
  fullName: string;
  birthDate: string;
  Gender: Gender;
  email: string;
  profilePictureURL: string;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}
