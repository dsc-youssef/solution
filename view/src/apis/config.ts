// Dependencies
import axios  from "axios";
import { INFORMATION } from "@/utils/config";

export const request = axios.create({
  baseURL: `${INFORMATION.request_url}`
});