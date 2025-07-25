import { useState, useEffect } from 'react';

const API_URL = 'https://portfolio-app-o4ma.onrender.com';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  // Fetch count on load
  useEffect(() => {
    fetch(`${API_URL}/count`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch count");
        return res.json();
      })
      .then((data) => setCount(data.count))
      .catch((err) => setError(err.message));
  }, []);

  // Handle button click
  const handleClick = () => {
    fetch(`${API_URL}/click`, {
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to click");
        return res.json();
      })
      .then((data) => setCount(data.count))
      .catch((err) => setError(err.message));
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me!</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;

