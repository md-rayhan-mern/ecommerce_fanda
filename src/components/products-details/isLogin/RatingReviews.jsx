import React from 'react';
import { MessageSquare  } from 'lucide-react';

export default function NoReviewsState() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
            <MessageSquare className="w-12 h-12 text-gray-300 stroke-[1.5] mb-3" />
            <p className="text-sm font-medium text-gray-500">This product has no reviews.</p>
            <p className="text-xs text-gray-400 mt-1">Let others know what you think and be the first to write a review.</p>
          </div>
  );
}
{/*  */}