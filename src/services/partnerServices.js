import { API_ENDPOINTS } from "../api/endpoints";
import { httpService } from "../api/httpService";


export const partnersServices = {
  creatPartner: (data) => {
    return httpService.post(`${API_ENDPOINTS.createPartner}`, data);
  },
};
