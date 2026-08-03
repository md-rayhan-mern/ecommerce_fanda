import { HelpCircle, MessageSquare, ChevronLeft, ChevronRight, User, ShieldCheck } from 'lucide-react';
import QaLogin from "../../../components/products-details/isLogin/Qa"
import QaLogout from '../../../components/products-details/isLogout/Qa';


const ProductQA = ({faq, id, isLogIn}) => {



  return (
    <>
   {isLogIn ? <QaLogin faq={faq} id={id}/> : <QaLogout/>}
     
  </>)
}

export default ProductQA