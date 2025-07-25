import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/count`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setCount(data.count);
      })
      .catch((err) => {
        console.error("Error fetching count:", err);
        setError(err.message);
      });
  }, [API_BASE]);

  const handleClick = () => {
    setLoading(true);
    fetch(`${API_BASE}/click`, { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error updating count:", err);
        setError(err.message);
        setLoading(false);
      });
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

