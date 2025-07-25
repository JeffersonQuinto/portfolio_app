import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use the API base URL from environment variables
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Fetch the current count when the component mounts
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(`${API_BASE}/count`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCount(data.count);
      } catch (err) {
        console.error("Error fetching count:", err);
        setError(err.message);
      }
    };

    fetchCount();
  }, [API_BASE]);

  // Handle button click to increment the count
  const handleClick = async () => {
    setLoading(true);
    setError(null); // Reset error state before making the request
    try {
      const response = await fetch(`${API_BASE}/click`, { method: "POST" });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCount(data.count);
    } catch (err) {
      console.error("Error updating count:", err);
      setError(err.message);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Hello, I'm Jefferson Quinto 👋</h1>
      <p>This is my portfolio.</p>

      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <button onClick={handleClick}>
            Count is {count}
          </button>
        )}
      </div>

      <p className="read-the-docs">Stop moving = Start losing</p>
    </>
  );
}

export default App;

