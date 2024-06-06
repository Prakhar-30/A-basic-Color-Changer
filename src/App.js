
import { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState('rgb(255,255,255)');

  useEffect(() => {
    const btn = document.querySelector('#btn1');
    const handleClick = () => {
      const b = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const r = Math.floor(Math.random() * 256);

      const newColor = `rgb(${r},${g},${b})`;
      setColor(newColor);
      document.body.style.backgroundColor = newColor;
    };

    btn.addEventListener('click', handleClick);

    return () => {
      btn.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <p>Current color: {color}</p>
      <button id='btn1'>Click me</button>
    </div>
  );
}

export default App;
