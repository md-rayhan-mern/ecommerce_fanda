import API from "./Api.js";

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_GET_USER_LOGIN,
        credentials,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  register: async (userData) => {
    try {
      const response = await API.post(
        import.meta.env.VITE_GET_CREATE_USER,
        userData,
      );
      
      return response;
    } catch (error) {
      throw error;
    }
  },
};
export default AuthService;
