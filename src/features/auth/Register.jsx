import React, { useState } from 'react';
import {Link} from "react-router"
import { motion } from 'framer-motion';
import { User, Phone, Mail, Lock, MapPin, Briefcase, Home, HelpCircle, UserCheck } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";
import {registerUser} from "./authSlice"


export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    addressType: 'Home', // default value
    areaDetails: '',
    gender: ''
  });
  
  const genderOptions = [
          { id: 'Male', label: 'মেল (Male)', icon: UserCheck, color: 'border-blue-500 text-blue-600 bg-blue-50/50 dark:bg-blue-950/20' },
          { id: 'Female', label: 'ফিমেল (Female)', icon: UserCheck, color: 'border-pink-500 text-pink-600 bg-pink-50/50 dark:bg-pink-950/20' },
          { id: 'Other', label: 'অন্যান্য (Other)', icon: HelpCircle, color: 'border-purple-500 text-purple-600 bg-purple-50/50 dark:bg-purple-950/20' }
        ];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data submitted:", formData);
    // এখানে আপনার API কল করতে পারেন
    if(!formData.name.trim()){
      toast.error("অনুগ্রহ করে আপনার পুরো নাম লিখুন!");
      return;
    }
    const bdPhoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if(!formData.phone.trim()){
      toast.error("মোবাইল নাম্বার দেওয়া বাধ্যতামূলক!");
      return;
    }else if(!bdPhoneRegex.test(formData.phone.trim())){
      toast.error("একটি সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নাম্বার দিন!");
      return;
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!formData.email.trim()){
      toast.error("ইমেইল অ্যাড্রেস দেওয়া বাধ্যতামূলক!");
      return;
     }else if(!emailRegex.test(formData.email)){
      toast.error("অনুগ্রহ করে একটি সঠিক ইমেইল আইডি দিন!");
      return;
     }
         if(!formData.password){
      toast.error("একটি স্ট্রং পাসওয়ার্ড তৈরি করুন!");
      return;
     }else if(formData.password.length < 6){
      toast.error("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে!");
      return;
     }
      if(!formData.gender){
      toast.error("অনুগ্রহ করে আপনার জেন্ডার সিলেক্ট করুন!");
      return;
     }
     if(!formData.areaDetails){
      toast.error("এড্রেস দেউয়া বাধ্যতামুলক!");
      return;
     }

 
     //dispatching
     try{
      await toast.promise(
      dispatch(registerUser(formData)).unwrap(),
          {
            loading: "অ্যাকাউন্ট তৈরি হচ্ছে, অপেক্ষা করুন...",
            success: "আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে! 🎉",
          }
     )

     setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      addressType: 'Home', // default value
      areaDetails: '',
      gender: ''
     })
     }catch(error){
      toast.error(error);  
     }
    

  };

  // অ্যানিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-center justify-center p-2">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            নতুন অ্যাকাউন্ট তৈরি করুন
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 mt-2 text-sm">
            আজই যোগ দিন এবং আমাদের সেবা উপভোগ করুন
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {/* Name Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">আপনার নাম <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </motion.div>

          {/* Phone Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">মোবাইল নাম্বার <span className="text-red-500">*</span></label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="tel" 
                name="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="017XXXXXXXX" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">ইমেইল ঠিকানা <span className="text-red-500">*</span></label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
              />
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">পাসওয়ার্ড <span className="text-red-500">*</span></label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="password" 
                name="password" 
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
              />
            </div>

          {/* gender selection area */}
      <motion.div variants={itemVariants} className="relative">
      {/* লেবেল বা শিরোনাম */}
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mt-5 mb-2">
        জেন্ডার সিলেক্ট করুন <span className="text-red-500">*</span>
      </label>
      {/* রেসপন্সিভ গ্রিড: মোবাইলে ১টি করে, ছোট স্ক্রিনের উপরে ৩টি কলামে দেখাবে */}
      <div className="grid grid-cols-3 gap-3">
        {genderOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = formData.gender === option.id;

          return (
            <div key={option.id} className="relative">
              {/* রেডিও ইনপুট (ব্যাকএন্ডে ডাটা পাঠানোর জন্য এটি হিডেন থাকবে কিন্তু কাজ করবে) */}
              <input
                type="radio"
                required
                name="gender"
                id={option.id}
                value={option.id}
                checked={isSelected}
                onChange={handleChange}
                className="sr-only" // স্ক্রিন রিডার ছাড়া এটি ইনপুটকে হাইড করে রাখবে
              />

              {/* কাস্টম ডিজাইন করা বাটন যা ইনপুট হিসেবে কাজ করবে */}
              <motion.label
                htmlFor={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center sm:flex-col sm:justify-center gap-3 sm:gap-2 px-4 py-3 rounded-2xl border-2 cursor-pointer transition-all text-sm font-medium text-center
                  ${isSelected 
                    ? `${option.color} font-bold shadow-md` 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800'
                  }`}
              >
                {/* আইকন অ্যানিমেশন */}
                <motion.div
                  animate={{ scale: isSelected ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? '' : 'text-gray-400'}`} />
                </motion.div>

                {/* টেক্সট লেবেল */}
                <span>{option.label}</span>

                {/* সিলেক্টেড হলে ছোট একটি টিক চিহ্নের অ্যানিমেশন (ঐচ্ছিক) */}
                {isSelected && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute top-2 right-2 w-2 h-2 rounded-full bg-current"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.label>
            </div>
          );
        })}
      </div>
      </motion.div>
        
          {/* Address Type (Radio Buttons) */}
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">ঠিকানার ধরন</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'Home', label: 'Home', icon: Home },
                { id: 'Office', label: 'Office', icon: Briefcase },
                { id: 'Other', label: 'Other', icon: HelpCircle }
              ].map((type) => {
                const IconComponent = type.icon;
                const isSelected = formData.addressType === type.id;
                return (
                  <label 
                    key={type.id}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border cursor-pointer transition-all text-sm select-none ${
                      isSelected 
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-400 font-medium' 
                        : 'bg-slate-800/30 border-slate-700 text-slate-400 hover:bg-slate-800/60'
                    }`}
                    
                  >
                    <input 
                      type="radio" 
                      name="addressType"
                      required
                      value={type.id}
                      checked={isSelected}
                      onChange={handleChange}
                      className="hidden" // সাধারণ রেডিও বাটনটি লুকিয়ে কাস্টম ডিজাইন করা হয়েছে
                    />
                    <IconComponent className="w-4 h-4" />
                    <span>{type.label}</span>
                  </label>
                );
              })}
            </div>
          </motion.div>

          {/* Address Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">বিস্তারিত ঠিকানা</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <textarea 
                name="areaDetails" 
                required
                rows="2"
                value={formData.areaDetails}
                onChange={handleChange}
                placeholder="বাসা নং, রোড নং, এলাকা, শহর..." 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm resize-none"
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all text-sm"
          >
            সাইন আপ করুন
          </motion.button>

        </form>
        <Link to="/login" className="text-indigo-400 w-full text-center hover:text-indigo-300 text-sm font-medium">
          Already have an account? Sign in
        </Link>
      </motion.div>
    </div>
  );
}
