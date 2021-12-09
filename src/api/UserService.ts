import axios, { AxiosResponse } from "axios";
import { IUSer } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUSer[]>> {
    return axios.get<IUSer[]>("./users.json");
  }
}
