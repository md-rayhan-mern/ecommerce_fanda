import Api from "../Api.js";

const getMe = {
    getMe: async () =>  {
        try{
        const getMe = import.meta.env.VITE_GET_GETME;
        const response  = await Api.get(getMe);
        console.log(response);

        return response;
        }catch(error){
            throw error;
        } 
    },
}

export default getMeService;