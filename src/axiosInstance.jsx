import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_SERVER_ADDRESS}`
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axiosInstance.post(`/auth/reissue`, {
          "refresh" : localStorage.getItem("refreshToken")
        }, {});

        localStorage.setItem('accessToken', response.data.data.access);
        localStorage.setItem('refreshToken', response.data.data.refresh);

        originalRequest.headers['Authorization'] = response.data.data.access;

        return axiosInstance(originalRequest);

      } catch (error) {
        if (error.response.data.message) {
          localStorage.clear();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
