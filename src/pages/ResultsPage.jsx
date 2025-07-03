import React, { useEffect, useState } from 'react';

export default function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe.user) {
      const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
      fetch(`https://your-backend.com/get-essays?user_id=${userId}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error(err));
    }
  }, []);

  if (results.length === 0) return <p className="p-4">No results found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📊 Your Last 5 Essays</h2>
      {results.map((r, i) => (
        <div key={i} className="border p-3 rounded mb-2">
          <p><strong>Date:</strong> {r.date}</p>
          <p><strong>Overall:</strong> {r.overall}</p>
          <p><strong>Task:</strong> {r.task}</p>
          <p><strong>Coherence:</strong> {r.coherence}</p>
          <p><strong>Lexical:</strong> {r.lexical}</p>
          <p><strong>Grammar:</strong> {r.grammar}</p>
        </div>
      ))}
    </div>
  );
}