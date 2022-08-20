import { useEffect, useState } from 'react'

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
          <button className='btn btn-secondary' key={index}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
