import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router"; // React Router v7 স্ট্যান্ডার্ড
import { LogIn, Loader2 } from "lucide-react"; // Lucide আইকন
import {loginUser} from "../auth/authSlice";
import { toast } from "react-hot-toast";
 export const Login = () => {

  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState('email');
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');


  

  const dispatch = useDispatch();
  const handleIdenifireChange = (e) => {
    const value = e.target.value;
    setIdentifier(value);
    setError(''); 
     const isNumeric = /^[0-9+]/.test(value);
    if(isNumeric){
      setInputType("phone");
    }else{
      setInputType("email");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
      // ১. ইমেইলের জন্য আন্তর্জাতিক স্ট্যান্ডার্ড Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // ২. বাংলাদেশের মোবাইল নাম্বারের স্ট্যান্ডার্ড Regex (১১ ডিজিট, শুরু হবে ০১ দিয়ে)
    const bdPhoneRegex = /^01[3-9]\d{8}$/;

    if(inputType === "email" && !emailRegex.test(identifier)){
      toast.error('দয়া করে একটি সঠিক ইমেইল ঠিকানা দিন।');
      return ;
  }
    if(inputType === "email" && emailRegex.length === 0){
      toast.error('ইমেইল অতবা ফোন নাম্বার ফিল্ড খালি রাখা যাবে না। দয়া করে একটি সঠিক ইমেইল ঠিকানা দিন।');
      return ;
  }

  if(inputType === "phone" && identifier.length < 11){
    toast.error('দয়া করে একটি সঠিক বাংলাদেশী ১১ সংখ্যা নাম্বার দিন');
  }
  if(inputType === "phone" && identifier.length > 11){
    toast.error('দয়া করে একটি সঠিক বাংলাদেশী ১১ সংখ্যা উপরে নাম্বার দিবেন্না');
  }
  if(inputType === "phone" && identifier.length === 0){
    toast.error('ইনপুট ফিল্ড খালি রাখা যাবে না। দয়া করে একটি সঠিক বাংলাদেশী মোবাইল নাম্বার দিন।');
  }
  
  if(inputType === "phone" && !bdPhoneRegex.test(identifier)){
      toast.error('দয়া করে একটি সঠিক বাংলাদেশী মোবাইল নাম্বার দিন।');
      return ;
  }
  const loginData = {
    [inputType] : inputType === 'email' ? identifier.toLowerCase() : identifier,
    password: password,
  }

  console.log(loginData);
}
  // রেডাক্স স্টেট থেকে প্রয়োজনীয় ডাটা নেওয়া
  const { isLoading, user } = useSelector((state) => state.auth);






  return (
    <div className="min-h-[0px]  bg-transparent flex flex-col items-center justify-center p-4 font-sans">
      {/* অ্যামাজন লোগো সিমুলেশন */}
      <div className=" flex flex-col items-center cursor-pointer text-[#131921]">
        <span className="text-3xl font-black tracking-tight leading-none">
          amazon
        </span>
        <span className="text-sm text-[#f3a847] font-bold self-end mt-[-2px] mr-1">
          .bd
        </span>
      </div>

      {/* লগইন কার্ড বক্স */}
      <div className="bg-white p-8 rounded-md border border-gray-300 w-full max-w-[350px] shadow-sm">
        <h1 className="text-2xl font-medium mb-4 text-gray-900">Sign in</h1>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
          {/* ইমেইল ইনপুট */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-700">
              Email or mobile phone number
            </label>
            <input
              type="text"
              name="email"
              required
              value={identifier}
              onChange={handleIdenifireChange}
              className="w-full h-8 px-2 border border-gray-400 rounded-sm text-sm outline-none focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600]"
            />
          </div>

          {/* পাসওয়ার্ড ইনপুট */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-8 px-2 border border-gray-400 rounded-sm text-sm outline-none focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600]"
            />
          </div>

          {/* সাবমিট বাটন (লোডিং স্টেট সহ) */}
          <button
            type="submit"
            // disabled={isLoading}
            className="w-full h-8 bg-[#f0c14b] hover:bg-[#e6b436] border border-[#a88734] hover:border-[#846a29] text-gray-900 text-sm rounded-sm font-normal cursor-pointer transition flex items-center justify-center gap-1 shadow-inner mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gray-700" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 text-gray-700" />
                <span>Continue</span>
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-gray-600 mt-4 leading-normal">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      {/* নতুন অ্যাকাউন্ট খোলার সেকশন */}
      <div className="w-full max-w-[350px] mt-6 flex flex-col items-center">
        <div className="w-full flex items-center justify-center mb-3">
          <div className="w-full border-t border-gray-300"></div>
          <span className="text-xs text-gray-500 px-2 whitespace-nowrap">
            New to Website?
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* রেজিস্ট্রেশন পেজের লিংক */}
        <Link
          to="/reg"
          className="w-full h-8 bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded-sm text-xs font-normal flex items-center justify-center text-gray-900 shadow-sm transition"
        >
          Create your Website account
        </Link>
      </div>
    </div>
  );
};

