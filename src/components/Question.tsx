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
    <div className='quiz-item'>
      <p className='question'>{question.question}</p>
      <div className='choices'>
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
