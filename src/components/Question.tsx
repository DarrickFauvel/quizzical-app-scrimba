import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import ChoiceButton from './ChoiceButton'

  const [question, setQuestion] = useState(data.question)
  const [incorrectAnswers, setIncorrectAnswers] = useState(
    question.incorrect_answers
  )
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const shuffleAnswers = () => {
      const answers = [data.correct_answer, ...data.incorrect_answers]
      const randomAnswers = []
      while (answers.length !== 0) {
        const randomIndex = Math.floor(Math.random() * answers.length)
        randomAnswers.push(answers[randomIndex])
        answers.splice(randomIndex, 1)
      }
      setAnswers(randomAnswers)
    }
    shuffleAnswers()
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
