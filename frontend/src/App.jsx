import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // ✅ This will allow dynamic switching between local and deployed backend
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Load click count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`${API_BASE}/count`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched count:", data.count);
        setCount(data.count);
      } catch (error) {
        console.error("❌ Failed to fetch count:", error);
      }
    };
    fetchCount();
  }, [API_BASE]);

  // Handle click and update count
  const handleClick = async () => {
    try {
      const res = await fetch(`${API_BASE}/click`, {
        method: "POST",
      });
      const data = await res.json();
      console.log("Updated count:", data.count);
      setCount(data.count);
    } catch (error) {
      console.error("❌ Failed to update count:", error);
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
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">Stop moving = Start losing</p>
    </>
  );
}

export default App;

