// src/api/errorHandler.js

import { errorMsg } from "../utils/customeFn";

export const handleApiError = (error) => {
  const status = error?.response?.status;
  const message =
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    "Something went wrong";

  switch (status) {
    case 400:
      errorMsg(message);
      break;

    case 401:
      errorMsg("Unauthorized. Please login again.");
      break;

    case 403:
      errorMsg("You do not have permission.");
      break;

    case 404:
      errorMsg("Resource not found.");
      break;

    case 409:
      errorMsg(message);
      break;

    case 422:
      errorMsg("Validation error");
      break;

    case 500:
      errorMsg("Server error — try again later.");
      break;

    default:
      errorMsg(message);
  }

  return Promise.reject(error);
};
