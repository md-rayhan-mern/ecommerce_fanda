import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { closeAuthModel, switchAuthModel } from '../../features/auth/authSlice';
import {Login} from "../../features/auth/Login"// আপনার তৈরি লগইন ফর্ম
import { SignupPage } from '../../features/auth/Register'; // আপনার তৈরি সাইনআপ ফর্ম

const  AuthModal = () =>  {
  const dispatch = useDispatch();
  // রিডাক্স থেকে স্টেট নিয়ে আসা
  const { isAuthModelOpen, authModelType } = useSelector((state) => state.auth);

  // পপ-আপ খোলা থাকলে পেজের স্ক্রলিং বন্ধ রাখার জন্য ইফেক্ট
  useEffect(() => {
    if (isAuthModelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isAuthModelOpen]);

  // ফ্রেমার মোশন অ্যানিমেশন কনফিগারেশন
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', duration: 0.4, bounce: 0.15 }
    },
    exit: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isAuthModelOpen && (
        // ব্যাকগ্রাউন্ড ওভারলে (কালো ও আবছা আবহাওয়া)
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => dispatch(closeAuthModel())} // বাইরে ক্লিক করলে বন্ধ হবে
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* মূল সাদা পপ-আপ বক্স */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // বক্সের ভেতর ক্লিক করলে যাতে বন্ধ না হয়
            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800"
          >
            {/* বন্ধ করার বাটন (ক্রস আইকন) */}
            <button
              onClick={() => dispatch(closeAuthModel())}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* হেডার এরিয়া */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {authModelType === 'login' ? 'স্বাগতম!' : 'নতুন অ্যাকাউন্ট তৈরি করুন'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {authModelType === 'login' ? 'আপনার অ্যাকাউন্টে লগইন করুন' : 'ই-কমার্সে শপিং শুরু করতে ফর্মটি পূরণ করুন'}
              </p>
            </div>

            {/* কন্ডিশনাল ফর্ম রেন্ডারিং */}
            {authModelType === 'login' ? "log": <SignupPage />}

            {/* নিচে লগইন/সাইনআপ সুইচ করার টেক্সট লিঙ্ক */}
            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              {authModelType === 'login' ? (
                <>
                  অ্যাকাউন্ট নেই?{' '}
                  <button 
                    onClick={() => dispatch(switchAuthModalType('signup'))}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    সাইনআপ করুন
                  </button>
                </>
              ) : (
                <>
                  অলরেডি অ্যাকাউন্ট আছে?{' '}
                  <button 
                    onClick={() => dispatch(switchAuthModalType('login'))}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    লগইন করুন
                  </button>
                </>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default AuthModal;