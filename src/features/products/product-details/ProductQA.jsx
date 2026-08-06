import { HelpCircle, MessageSquare, ChevronLeft, ChevronRight, User, ShieldCheck } from 'lucide-react';
import QaLogin from "../../../components/products-details/isLogin/Qa"
import QaLogout from '../../../components/products-details/isLogout/Qa';


const ProductQA = ({faq, productId, isLogIn}) => {
 


  return (
    <>
   {isLogIn ? <QaLogin productId={productId} faq={faq}/> : <QaLogout/>}
     
  </>)
}

export default ProductQA