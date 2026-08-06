import Api from "../Api.js"

const FaqService =  {
        postQuestionService : async (faqData) => {
            const url = import.meta.env.VITE_POST_FAQ;
            const response = await Api.post(`${url}`, faqData);
            console.log(`faq service: ${response} step - 1` );
            
            return response?.data;
        },
        getProductFaqsService : async (productId) => {
            const url = import.meta.env.VITE_GET_FAQ;
            const response = await API.get(`${url}/${productId}`);
            return response?.data;
        },
};

export default FaqService;