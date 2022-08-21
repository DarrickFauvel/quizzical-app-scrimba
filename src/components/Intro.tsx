const Intro = ({ setGameState }) => {
  return (
    <div className='intro-view'>
      <div className='intro-container container'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button
          className='btn btn-primary'
          onClick={() => setGameState('quiz')}>
          Start quiz
        </button>
      </div>
    </div>
  )
}

export default Intro
