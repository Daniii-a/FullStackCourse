import { useState } from 'react';

const Statistics = (props) => {
  return(
  <div>
    <h3>Statistics</h3>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.total}</p>
    <p>Average: {props.average}</p>
    <p>Positive: {props.positive}</p>
  </div>
  )  
}

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

  const positivePercentage = (good / total) * 100

  return(
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positive={positivePercentage}
      />
    </div>
  )

}
export default App