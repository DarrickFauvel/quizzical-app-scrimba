import { useEffect, useState } from 'react'
import Question from './Question'

const API_URL =
  'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'

const Quiz = ({ gameState, setGameState }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setData(data.results)
      setIsLoading(false)
    }
    getQuizData()
  }, [])

  const checkAnswers = () => {
    setGameState('end')
  }

  return (
    <div className='quiz-view'>
      <div className='quiz-container container'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.map((data, index: number) => (
              <Question data={data} key={index} />
            ))}

            <button className='btn btn-primary check-answers'>
              Check answers
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz
