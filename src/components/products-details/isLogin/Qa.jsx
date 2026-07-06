import React, { useState } from 'react';
import { ChevronLeft,HelpCircle , ChevronRight, Smile, Frown } from 'lucide-react';

// মক ডাটা
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "full sleeve ache etar?",
    askedBy: "jisan7880",
    askedDate: "01 May 2026",
    answer: "ji sir",
    answeredTime: "Answered within 2 weeks"
  },
  {
    id: 2,
    question: "Logo embroidery kora? Naki print?",
    askedBy: "Turabi Alam",
    askedDate: "04 May 2026",
    answer: "embroday sir",
    answeredTime: "Answered within 1 week"
  },
  {
    id: 3,
    question: "Vai onekei dekhlam review diche jersey er hate world cup 26 er jhei logo seita missing... Tho ami o jodi order kori eita ki missing thakbe..?",
    askedBy: "0***0",
    askedDate: "09 May 2026",
    answer: "Same e hobe sir",
    answeredTime: "Answered within 6 days"
  }
];

const Qa =() => {
  const [questions, setQuestions] = useState(MOCK_QUESTIONS);
  const [newQuestion, setNewQuestion] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 2; 

  // পেজিনেশন লজিক
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const createdQuestion = {
      id: Date.now(),
      question: newQuestion,
      askedBy: "You",
      askedDate: "Today",
      answer: null, 
      answeredTime: ""
    };

    setQuestions([createdQuestion, ...questions]);
    setNewQuestion('');
    setCurrentPage(1); 
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto p-4 md:p-6 bg-white font-sans text-sm text-gray-800">
      
      {/* ১. হেডার সেকশন */}
      <h2 className="text-[15px] font-medium text-gray-900 mb-4">
        Questions about this product ({questions.length})
      </h2>

      {/* ২. ইনপুট ও বাটন ফিল্ড */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 items-stretch border border-gray-200 rounded overflow-hidden focus-within:border-orange-500 transition-all mb-6">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter your question(s) here"
          className="flex-1 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
        />
        <button
          type="submit"
          className="bg-[#f57224] hover:bg-[#d65f1a] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-colors whitespace-nowrap"
        >
          Ask Questions
        </button>
      </form>
      {/* Question list */}
    {questions.length === 0 ? (<div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-16 bg-white font-sans text-center px-4">
      
      {/* স্ক্রিনশটের মতো চ্যাট বাবল প্রশ্ন আইকন */}
      <div className="relative mb-4 text-gray-400">
        <HelpCircle className="w-14 h-14 stroke-[1.2]" />
      </div>

      {/* টেক্সট মেসেজসমূহ */}
      <p className="text-[14px] text-gray-600 font-normal mb-1">
        There are no questions yet.
      </p>
      <p className="text-[13px] text-gray-400 font-normal">
        Ask the seller now and their answer will show here.
      </p>

    </div>) : ( <>
      <div className="text-[13px] text-gray-600 border-b border-gray-100 pb-3 mb-5">
        Other questions answered by Samaro ({questions.length})
      </div>

      
      <div className="space-y-6 min-h-[250px]">
        {currentQuestions.map((item) => (
          <div key={item.id} className="space-y-3">
            
            {/* প্রশ্ন ব্লগ */}
            <div className="flex items-start gap-3">
              <span className="bg-[#1095b0] text-white text-[11px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-[2px] shrink-0 mt-0.5">
                Q
              </span>
              <div>
                <p className="text-gray-900 font-normal leading-tight">{item.question}</p>
                <p className="text-xs text-gray-400 mt-1">{item.askedBy} - {item.askedDate}</p>
              </div>
            </div>

            {/* উত্তর ব্লগ */}
            {item.answer && (
              <div className="flex items-start gap-3 pl-1">
                <span className="bg-[#a3a3a3] text-white text-[11px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-[2px] shrink-0 mt-0.5">
                  A
                </span>
                <div>
                  <p className="text-gray-800 font-normal leading-tight">{item.answer}</p>
                  <p className="text-xs text-gray-400 mt-1">Samaro - <span className="italic">{item.answeredTime}</span></p>
                </div>
              </div>
            )}
            
          </div>
        ))}
      </div> </>)}
   

      {/* ৫. পেজিনেশন বাটন সেকশন (এখন একদম মাঝখানে) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1.5 pt-6 mt-4 border-t border-gray-100">
          
          {/* প্রিভিয়াস বাটন */}
          <button 
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded border border-gray-200 text-gray-400 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          {/* পেজ নাম্বার লিস্ট */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded text-xs font-medium border transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#1095b0] border-[#1095b0] text-white'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          {/* নেক্সট বাটন */}
          <button 
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded border border-gray-200 text-gray-400 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

        </div>
      )}

    </div>
  );
}
export default Qa;