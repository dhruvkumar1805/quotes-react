import React from "react";

function QuoteCard({ quote }) {
  return (
    <div className="bg-white shadow-md rounded p-6 m-2 max-w-sm">
      <p className="text-lg font-semibold text-gray-800">{quote}</p>
    </div>
  );
}

export default QuoteCard;
