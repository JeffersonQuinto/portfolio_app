import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/count`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched count:", data.count);
        setCount(data.count);
      })
      .catch((err) => {
        console.error("Error fetching count:", err);
      });
  }, [API_BASE]);

  const handleClick = () => {
    fetch(`${API_BASE}/click`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated count:", data.count);
        setCount(data.count);
      })
      .catch((err) => {
        console.error("Error updating count:", err);
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
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">Stop moving = Start losing</p>
    </>
  );
}

export default App;

