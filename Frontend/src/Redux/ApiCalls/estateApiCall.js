import request from "./../../utils/request"

export const fetchEstates = async () => {
    try {
      const response = await request.get('/estate');
      return response.data.data;
    } catch (error) {
      return error;
    }
  };
  