import {Post} from "./post";

export type Category = {
  id: number;
  createdAt: string;
  disabledAt: string;
  updatedAt: string;
  name: string;
  posts: Array<Post>;
}
