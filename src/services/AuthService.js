import API from "./Api.js";

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_USER_API_URL_LOGIN,
        credentials,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  register: async (userData) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_USER_API_URL_REGISTER,
        userData,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
export default AuthService;
