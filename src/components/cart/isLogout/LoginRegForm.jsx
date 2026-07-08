import React, { useState } from 'react';
import {motion} from "framer-motion"
import { Eye, EyeOff } from 'lucide-react';

const DarazLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
      const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <motion.div variants={itemVariants} className="min-h-screen bg-[#eff0f5] flex flex-col items-center justify-center p-4 antialiased">
      {/* Top Header Section */}
      <div className="w-full max-w-[850px] flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 px-2">
        <h1 className="text-lg sm:text-xl md:text-2xl text-[#424242] font-normal">
          Welcome to Daraz! Please login.
        </h1>
        <p className="text-xs sm:text-sm text-[#757575]">
          New member?{' '}
          <a href="#" className="text-[#1a73e8] hover:underline">
            Register here
          </a>
          .
        </p>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-[850px] bg-white rounded-sm shadow-sm p-4 sm:p-8 md:p-12">
        <div className="max-w-[480px] mx-auto">
          {/* Form Title */}
          <h2 className="text-base sm:text-lg md:text-xl text-[#212121] font-medium mb-6 sm:mb-8">
            Login with Password
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Phone/Email Input */}
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm text-[#757575]">
                Phone Number or Email*
              </label>
              <input
                type="text"
                placeholder="Please enter your Phone Number or Email"
                className="w-full border border-[#dadada] rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-[#c4c4c4] focus:outline-none focus:border-[#f57224] transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 relative">
              <div className="flex justify-between items-center">
                <label className="block text-xs sm:text-sm text-[#757575]">
                  Password*
                </label>
                <a href="#" className="text-xs sm:text-sm text-[#1a73e8] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Please enter your password"
                  className="w-full border border-[#dadada] rounded-sm px-3 py-2 pr-10 text-xs sm:text-sm placeholder-[#c4c4c4] focus:outline-none focus:border-[#f57224] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#424242]"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#f57224] text-white py-2.5 rounded-sm font-medium text-sm sm:text-base tracking-wider hover:bg-[#d65f1c] transition-colors mt-2"
            >
              LOGIN
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-6 items-center">
            <div className="flex-grow border-t border-[#f0f0f0]"></div>
            <span className="flex-shrink mx-4 text-xs sm:text-sm text-[#9e9e9e] font-light">
              Or, login with
            </span>
            <div className="flex-grow border-t border-[#f0f0f0]"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Facebook Button */}
            <button className="flex items-center justify-center gap-2 border border-[#dadada] rounded-sm py-2 px-4 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-xs sm:text-sm text-[#424242] font-medium">Facebook</span>
            </button>

            {/* Google Button */}
            <button className="flex items-center justify-center gap-2 border border-[#dadada] rounded-sm py-2 px-4 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-xs sm:text-sm text-[#424242] font-medium">Google</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DarazLogin;
