import request from "./../../utils/request"

export const fetchCities = async () => {
    try {
      const response = await request.get('/city');
      return response.data.data;
    } catch (error) {
      return error;
    }
  };
  