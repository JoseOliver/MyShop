import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar/>
      <h1>Vite + React</h1>
      <div className='col top-center'>
      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>+1</Button>
        <p>
          count is {count}
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <div className='ocupa-mucho'> ocupa mucho </div>
    </>
  )
}

export default App
