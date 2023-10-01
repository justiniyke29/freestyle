import baseAxiosMethod from "./baseAxiosMethod";

const axiosBaseQuery =
  (
    { baseUrl } = {
      baseUrl: "https://tma-be-dev.onrender.com/api/v1",
    }
  ) =>
  async ({ url, method, data }) => {
    const combinedUrl = `${baseUrl}${url}`;

    try {
      const axiosCall = () => {
        switch (method) {
          case "get":
            return baseAxiosMethod.get(combinedUrl, data);

          case "post":
            return baseAxiosMethod.post(combinedUrl, data);

          case "patch":
            return baseAxiosMethod.patch(combinedUrl, data);

          case "put":
            return baseAxiosMethod.put(combinedUrl, data);

          case "delete":
            return baseAxiosMethod.delete(combinedUrl, data);

          default:
            return baseAxiosMethod.get(combinedUrl, data);
        }
      };

      const response = await axiosCall();

      return { data: response?.data || response };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status || err.response?.error_code,
          data: err.response?.data?.message || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
