import { useState } from 'react';

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
    if (props.total === 0) {
      return(
        <div>
          <h3>Statistics</h3>
          <p>No feedback given</p>
        </div>
      )
    }

    return(
  <div>
    <h3>Statistics</h3>
    <table>
      <tbody>
        <StatisticsLine text="Good" value={props.good} />
        <StatisticsLine text="Neutral" value={props.neutral} />
        <StatisticsLine text="Bad" value={props.bad} />
        <StatisticsLine text="Total" value={props.total} />
        <StatisticsLine text="Average" value={props.average} />
        <StatisticsLine text="Positive" value={props.positive} />
      </tbody>
    </table>
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

      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>

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