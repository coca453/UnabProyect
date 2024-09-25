import axios from "axios";

const ERROR_JWT = "Error in JWT Token";

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_APIGATEWAY_URL,
  validateStatus: function (status) {
    return status < 400;
  },
});
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.data?.error === ERROR_JWT) {
      alert(
        "Su tiempo de sesión ha expirado, por favor comience una nueva simulación."
      );
      location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
