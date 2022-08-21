import { useEffect, useState } from 'react'
import Question from './Question'

const API_URL =
  'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const { isLoading, setIsLoading } = useContext(QuizContext)

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setQuestions(data.results)
      setIsLoading(false)
    }
    getQuizData()
  }, [])

  return (
    <div className='quiz-view'>
      <div className='quiz-container container'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {questions.map((question, index: number) => (
              <Question question={question} key={index} />
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
