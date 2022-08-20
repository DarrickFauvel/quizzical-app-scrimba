import { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../contexts/Context'
import Question from './Question'

const API_URL =
  'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'

const Quiz = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setQuestions(data.results)
    }
    getQuizData()
    setIsLoading(false)
  }, [])

  return (
    <div className='quiz'>
      {isLoading && <p>Loading...</p>}
      {questions.map((question, index: number) => (
        <Question question={question} key={index} />
      ))}
    </div>
  )
}

export default Quiz
