// src/utils/toastUtils.js
import toast from "react-hot-toast";

export const errorMsg = (message) =>
  toast.error(message || "Error occurred");

export const successMsg = (message) =>
  toast.success(message || "Success");

export const buildUrl = (base, params = {}) => {
  let url = base;
  const remaining = { ...params };

  Object.keys(params).forEach((key) => {
    const placeholder = `:${key}`;
    if (url.includes(placeholder)) {
      url = url.replace(placeholder, params[key]);
      delete remaining[key];
    }
  });

  const query = new URLSearchParams(remaining).toString();
  return query ? `${url}?${query}` : url;
};
