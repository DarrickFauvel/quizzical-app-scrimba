import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [gameState, setGameState] = useState<string>('start')

  return (
    <div className='app'>
      <div className='app-container'>
        {gameState === 'start' && <Intro setGameState={setGameState} />}
        {gameState === 'quiz' && <Quiz />}
      </div>
    </div>
  )
}

export default App
