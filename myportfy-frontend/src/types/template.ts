import {User} from "./user";
import {Navbar} from "./navbar";

export type Template = {
  id: number;
  createdAt: string;
  disabledAt: string;
  updatedAt: string;
  owner: User;
  navbar: Navbar;
}
