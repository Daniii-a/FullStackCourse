import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
      console.log('Clicked Good')
    setGood(good + 1)
    }
  
  const handleNeutralClick = () => {
      console.log('Clicked Neutral')
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
      console.log('Clicked Bad')
    setBad(bad + 1)
  }

  const total = good + neutral + bad

  const average = (good * 1 + neutral * 0 + bad * -1) / total

  return(
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
    </div>
  )

}
export default App