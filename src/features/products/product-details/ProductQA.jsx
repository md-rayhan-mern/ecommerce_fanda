import {useState} from 'react'
import { HelpCircle, MessageSquare, ChevronLeft, ChevronRight, User, ShieldCheck } from 'lucide-react';
import QaLogin from "../../../components/products-details/isLogin/Qa"
import QaLogout from '../../../components/products-details/isLogout/Qa';


const ProductQA = ({faq, id}) => {

    const [isLogin, setIsLogin] = useState(true);


  return (
    <>
   {isLogin ? <QaLogin faq={faq} id={id}/> : <QaLogout/>}
     
  </>)
}

export default ProductQA