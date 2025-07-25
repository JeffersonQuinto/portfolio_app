import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const lyrics = [
  "Mahirap bang ipilit ang lumaban 'pag hindi na kaya?",
  "Saan na kukuha ng lakas?",
  "Ibuhos man lahat-lahat, wala pa rin itong pag-asa",
  "Kung mag-isa kang lalaban",
  "Sa pagtakbo ng oras, unti-unting kumupas",
  "Ang dating wagas ay magwawakas",
  "Masisisi mo ba kung ayaw na talaga?",
  "Kung ang pag-ibig mo, tuluyang maglaho",
  "Oh, ba't nagbago bigla? Mga titig ay nag-iba",
  "Ika'y lumalayo, tadhana ba ito?",
  "Kapag damdamin na'ng nagsalita",
  "Wala ka nang magagawa kundi sundin ito kahit ayaw",
  "Wala na ngang natitira, lahat-lahat, naglaho na",
  "Konting pilit pa'y masusugatan, bumitaw ka na",
  "Sa pagtakbo ng ang oras, unti-unting kumupas",
  "Ang dating wagas ay magwawakas",
  "Masisisi mo ba kung ayaw na talaga?",
  "Kung ang pag-ibig mo, tuluyang maglaho",
  "Oh, ba't nagbago bigla? Mga titig ay nag-iba",
  "Ika'y lumalayo, tadhana ba ito?",
  "Tayo'y nagkamali, tayo ay nasugatan",
  "Maling galaw, lahat ay sasabit",
  "Ito na ba'ng huli, tayo'y magpapaalam na",
  "Sa ating nakaraan at bibitawan?",
  "Masisisi mo ba kung ayaw na talaga?",
  "Kung ang pag-ibig mo, tuluyang maglaho",
  "Masisisi mo ba kung ayaw na talaga?",
  "Kung ang pag-ibig mo (pag-ibig mo), tuluyang maglaho",
  "Oh, ba't nagbago bigla? Mga titig ay nag-iba",
  "Ika'y papalayo, tadhana ba ito?"
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
