import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import ChoiceButton from './ChoiceButton'

const Question = ({ data }) => {
  const [question, setQuestion] = useState(data.question)
  const [correctAnswer, setCorrectAnswer] = useState(data.correct_answer)
  const [incorrectAnswers, setIncorrectAnswers] = useState(
    data.incorrect_answers
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

  const handleChoiceClick = (e) => {
    const selectedButton = e.target
    const selectedAnswer = selectedButton.dataset.answer
    const parentEl = selectedButton.parentElement
    const buttonEls = parentEl.querySelectorAll('button')
    buttonEls.forEach((button) => {
      button.dataset.selected = false
      button.classList.remove('selected')
    })
    selectedButton.dataset.selected = true
    selectedButton.classList.add('selected')
  }

  return (
    <div className='question'>
      <p className='question-text'>{parse(question)}</p>
      <div className='question-choices'>
        {answers.map((answer, index) => (
          <ChoiceButton
            answer={answer}
            key={index}
            handleChoiceClick={handleChoiceClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Question
