import request from "./../../utils/request"

export const fetchArticles = async () => {
    try {
      const response = await request.get('/article');
      return response.data.data;
      console.log(response);
    } catch (error) {
      return error;
    }
  };
  