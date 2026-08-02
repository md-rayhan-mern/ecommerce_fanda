import React, { useState } from 'react';
import {Link} from "react-router"
import { motion } from 'framer-motion';
import { User, Phone, Mail, Lock, MapPin, Briefcase, Home, HelpCircle } from 'lucide-react';

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    addressType: 'home', // default value
    address: ''
  });
console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data submitted:", formData);
    // এখানে আপনার API কল করতে পারেন
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-center justify-center p-4">
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

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name Field */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">আপনার নাম</label>
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
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">মোবাইল নাম্বার</label>
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
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">ইমেইল ঠিকানা</label>
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
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">পাসওয়ার্ড</label>
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
          </motion.div>

          {/* Address Type (Radio Buttons) */}
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">ঠিকানার ধরন</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'office', label: 'Office', icon: Briefcase },
                { id: 'other', label: 'Other', icon: HelpCircle }
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
                name="address" 
                required
                rows="2"
                value={formData.address}
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
        <Link to="/login" className="text-indigo-400 w-full hover:text-indigo-300 text-sm font-medium">
          Already have an account? Sign in
        </Link>
      </motion.div>
    </div>
  );
}
