import parse from 'html-react-parser'

const ChoiceButton = ({ answer }) => {
  return <button className='btn btn-secondary choice'>{parse(answer)}</button>
}

export default ChoiceButton
