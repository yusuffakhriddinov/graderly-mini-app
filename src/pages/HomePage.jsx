import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📚 Welcome to Graderly</h1>
      <button onClick={() => navigate("/task1")} className="btn">✍️ Task 1</button>
      <button onClick={() => navigate("/task2")} className="btn mt-2">📝 Task 2</button>
      <button onClick={() => navigate("/results")} className="btn mt-2">📊 View Results</button>
    </div>
  );
}
