import {User} from "./user";
import {Category} from "./category";

export type Post = {
  id?: number;
  createdAt?: string;
  disabledAt?: string;
  updatedAt?: string;
  title: string;
  content: string;
  description: string;
  author?: User;
  imageURL?: string;
  categories?: Array<Category>;
}

export type uploadImageType = {
  id: number;
  image: string | Blob
}

export type updatePostType = {
  id: number;
  post: Post
}
