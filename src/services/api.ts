import axios from "axios";
import { Post } from "../types/post";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (): Promise<Post[]> => {
  const response = await API.get("/posts");
  return response.data;
};
