import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import ChoiceButton from './ChoiceButton'

const Question = ({ question }) => {
  const [correctAnswer, setCorrectAnswer] = useState(question.correct_answer)
  const [incorrectAnswers, setIncorrectAnswers] = useState(
    question.incorrect_answers
  )
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const combinedAnswers = [
      question.correct_answer,
      ...question.incorrect_answers
    ]
    setAnswers(combinedAnswers)
  }, [])

  return (
    <div className='question'>
      <p className='question-text'>{parse(question.question)}</p>
      <div className='question-choices'>
        {answers.map((answer, index) => (
          <ChoiceButton answer={answer} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Question
