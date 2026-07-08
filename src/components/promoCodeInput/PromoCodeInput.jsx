import {useState} from 'react'

const PromoCodeInput = () => {
     const [promoCode, setPromoCode] = useState('');
  return (
               <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter Store/Promo Code" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-xs px-5 rounded tracking-wider transition-colors uppercase">
                Apply
              </button>
            </div>
  )
}
export default PromoCodeInput