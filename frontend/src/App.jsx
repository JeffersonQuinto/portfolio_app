import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const lyrics = [
  "print('Python, Python, you’re so fine!')",
  "print('Coding every single line.')",
  "print('Loops and functions make me cheer,')",
  "print('Python syntax – crystal clear!')"
];

function App() {
  const [count, setCount] = useState(0)
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lyrics.length);
    }, 2000); // Change lyric every 2 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello, I'm Jefferson Quinto 👋</h1>
      <p>This is my portfolio.</p>
      
       {/* Karaoke Lyrics Display */}
      <div className="karaoke">
        <h2 style={{ color: '#61dafb', fontFamily: 'monospace' }}>🎤 Python Karaoke</h2>
        <pre style={{ fontSize: '1.25rem' }}>{lyrics[currentLine]}</pre>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
