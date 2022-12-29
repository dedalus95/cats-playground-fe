import {User} from "./user";

export interface LoginRes {
  user: User;
  refreshToken: string;
  accessToken: string;
}
