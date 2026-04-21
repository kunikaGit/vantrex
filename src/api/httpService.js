// src/api/httpService.js
import apiClient from "./apiClient";
import { handleApiError } from "./errorHandler";

export const httpService = {
  get: (url, config) =>
    apiClient.get(url, config).catch(handleApiError),

  post: (url, data, config) =>
    apiClient.post(url, data, config).catch(handleApiError),

  put: (url, data, config) =>
    apiClient.put(url, data, config).catch(handleApiError),

  patch: (url, data, config) =>
    apiClient.patch(url, data, config).catch(handleApiError),

  delete: (url, config) =>
    apiClient.delete(url, config).catch(handleApiError),
};
