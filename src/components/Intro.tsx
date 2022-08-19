import { useContext } from 'react'
import { QuizContext } from '../contexts/Context'

const Intro = () => {
  const { setGameState } = useContext(QuizContext)

  return (
    <div className='intro'>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className='btn btn-primary' onClick={() => setGameState('quiz')}>
        Start quiz
      </button>
    </div>
  )
}

export default Intro
