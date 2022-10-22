import {User} from "./user";
import {NavbarDto} from "../dto/navbar.dto";

export type Template = {
  id: number;
  createdAt: string;
  disabledAt: string;
  updatedAt: string;
  owner: User;
  navbar: NavbarDto;
}
