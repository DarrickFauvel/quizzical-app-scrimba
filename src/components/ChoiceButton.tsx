import parse from 'html-react-parser'

const ChoiceButton = ({ answer, handleChoiceClick }) => {
  return (
    <button
      className='btn btn-secondary choice'
      data-answer={answer}
      onClick={handleChoiceClick}>
      {parse(answer)}
    </button>
  )
}

export default ChoiceButton
