import { useState } from 'react'
import { QuizContext } from './contexts/Context'
import './App.css'
import End from './components/End'
import Intro from './components/Intro'
import Quiz from './components/Quiz'

function App() {
  const [gameState, setGameState] = useState('start')

  const handleClick = () => {}

  return (
    <div className='app'>
      <div className='app-container'>
        <QuizContext.Provider value={{ gameState, setGameState }}>
          {gameState === 'start' && <Intro />}
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'end' && <End />}
        </QuizContext.Provider>
      </div>
    </div>
  )
}

export default App
