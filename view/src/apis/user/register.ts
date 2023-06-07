import { request } from "@/apis/config";

export default (data: FormData) => request.post("auth/register", data);

