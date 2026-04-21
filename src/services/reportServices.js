import { API_ENDPOINTS } from "../api/endpoints";
import { httpService } from "../api/httpService";


export const reportService = {
  getReports: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return httpService.get(`${API_ENDPOINTS.reports}?${query}`);
  },
};
