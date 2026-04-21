// src/services/authService.js
import { httpService } from "../api/httpService";
import { API_ENDPOINTS } from "../api/endpoints";
import { buildUrl } from "../utils/customeFn";

export const authService = {
  login: (data, params) =>
    httpService.post(buildUrl(API_ENDPOINTS.login, params), data),
};
