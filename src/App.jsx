import React, { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard";

function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        Ron Swanson Quotes
      </h1>
      <button
        onClick={fetchQuote}
        className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-700 transition mb-6"
      >
        Get New Quote
      </button>
      <QuoteCard quote={quote} />
      <button
        onClick={saveQuote}
        className="bg-green-500 text-white px-6 py-3 rounded shadow-lg hover:bg-green-700 transition mt-6"
      >
        Save Quote
      </button>
      <h2 className="text-3xl font-bold text-gray-800 mt-12">Saved Quotes</h2>
      <div className="saved-quotes mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {savedQuotes.map((savedQuote, index) => (
          <QuoteCard key={index} quote={savedQuote} />
        ))}
      </div>
    </div>
  );
}

export default App;
