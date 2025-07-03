import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';

export default function EssayEditor({ task }) {
  const [essay, setEssay] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const userId = window.Telegram.WebApp.initDataUnsafe.user.id;

    await fetch('https://your-backend.com/submit-essay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, task, essay_text: essay })
    });

    setSubmitted(true);
  };

  if (submitted) return <p>✅ Essay submitted. You’ll get feedback soon!</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">🕒 Time Left:</h2>
      <Timer initialSeconds={task === 'task1' ? 1200 : 2400} />
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Write your essay here..."
        className="w-full h-64 mt-4 p-2 border rounded"
      />
      <button onClick={handleSubmit} className="btn mt-4">Submit Essay</button>
    </div>
  );
}
