import React, { useState, useEffect } from 'react';

// প্রপ্স হিসেবে startDateStr এবং endDateStr রিসিভ করা হচ্ছে
const CountdownTimer = ({ startDateStr, endDateStr }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00'
  });
  const [status, setStatus] = useState('লোড হচ্ছে...');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // স্ট্রিং ডেটগুলোকে টাইমস্ট্যাম্পে (Miliseconds) রূপান্তর
    const startDate = new Date(startDateStr).getTime();
    const endDate = new Date(endDateStr).getTime();

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      let targetDate;

      // অফারের বর্তমান অবস্থা চেক করার লজিক
      if (now < startDate) {
        targetDate = startDate;
        setStatus('🔥 অফার শুরু হতে বাকি:');
      } else if (now >= startDate && now <= endDate) {
        targetDate = endDate;
        setStatus('⏳ অফার শেষ হতে বাকি:');
      } else {
        setStatus('❌ অফারটি শেষ হয়ে গেছে!');
        setIsExpired(true);
        clearInterval(timerInterval);
        return;
      }

      const difference = targetDate - now;

      // দিন, ঘন্টা, মিনিট, সেকেন্ড হিসাব
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      // স্টেট আপডেট
      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0'),
      });
    }, 1000);

    // ক্লিনআপ ফাংশন
    return () => clearInterval(timerInterval);
  }, [startDateStr, endDateStr]); // ডেট পরিবর্তন হলে টাইমার আবার রিসেট হবে

  return (
    <div className="max-w-sm mx-auto my-4 p-4 bg-gray-900 border border-gray-800 rounded-xl shadow-xl text-center">
      {/* স্ট্যাটাস টেক্সট */}
      <h3 className={`text-sm font-semibold tracking-wide uppercase mb-3 ${isExpired ? 'text-red-500' : 'text-emerald-400'}`}>
        {status}
      </h3>

      {/* টাইমার ডিসপ্লে */}
      {!isExpired && (
        <div className="flex justify-center items-center gap-2 font-mono">
          
          {/* দিন */}
          <div className="flex flex-col items-center">
            <span className="bg-gray-800 text-white text-xl font-bold px-3 py-1.5 rounded-lg border border-gray-700 min-w-[45px]">
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">দিন</span>
          </div>
          <span className="text-xl font-bold text-gray-600 pb-5">:</span>

          {/* ঘন্টা */}
          <div className="flex flex-col items-center">
            <span className="bg-gray-800 text-white text-xl font-bold px-3 py-1.5 rounded-lg border border-gray-700 min-w-[45px]">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">ঘন্টা</span>
          </div>
          <span className="text-xl font-bold text-gray-600 pb-5">:</span>

          {/* মিনিট */}
          <div className="flex flex-col items-center">
            <span className="bg-gray-800 text-white text-xl font-bold px-3 py-1.5 rounded-lg border border-gray-700 min-w-[45px]">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">মিনিট</span>
          </div>
          <span className="text-xl font-bold text-gray-600 pb-5">:</span>

          {/* সেকেন্ড */}
          <div className="flex flex-col items-center">
            <span className="bg-rose-600 text-white text-xl font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-rose-900/40 min-w-[45px] animate-pulse">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-rose-400 mt-1">সেকেন্ড</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
