import { request } from "@/apis/config";
import { UserLoginRequest } from "@/types/user";

export default ({
  username, password
}: UserLoginRequest)=> request.post("auth/login", { username, password });
