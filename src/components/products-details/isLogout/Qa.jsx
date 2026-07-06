import React from 'react'
import {HelpCircle } from "lucide-react"
const Qa = () => {
  return (
    <>
              {/* ৩. কোয়েশ্চেন বা প্রশ্নোত্তর সেকশন */}
      <div className="pt-6">
        <h3 className="text-base font-semibold mb-4">Questions about this product</h3>
        <div className="flex flex-col items-center justify-center py-8 text-center bg-gray-50 rounded-lg p-4">
          <HelpCircle className="w-10 h-10 text-gray-300 stroke-[1.5] mb-2" />
          <p className="text-sm font-medium text-gray-500">There are no questions yet.</p>
          <p className="text-xs text-gray-400 mt-1">
            <button className="text-blue-600 font-medium hover:underline">Login</button> or{' '}
            <button className="text-blue-600 font-medium hover:underline">Register</button> to ask the seller now and answer will show here.
          </p>
        </div>
      </div>
      </>
  )
}

export default Qa