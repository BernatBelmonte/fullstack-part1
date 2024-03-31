import { useState } from "react"

const StatisticLine = ({ text, value }) => {
  if (text === "Positive") {
    const percentage1 = Number(value/100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });
    return (
      <tr>
        <td>{ text }</td>
        <td>{percentage1}</td>
      </tr>
    )  
  }
  return (
    <tr>
      <td>{ text }</td>
      <td>{ value }</td>
    </tr>
  )

}
const Statistics = ({ opinions }) => {
  
  if (opinions.good > 0 || opinions.neutral > 0 || opinions.bad > 0) {
    const sum = opinions.good + opinions.neutral +opinions.bad
    return (
      <div>
        <table>
          <tbody>
          <StatisticLine text="Good" value={opinions.good}></StatisticLine>
          <StatisticLine text="Neutral" value={opinions.neutral}></StatisticLine>
          <StatisticLine text="Bad" value={opinions.bad}></StatisticLine>
          <StatisticLine text="All" value={sum}></StatisticLine>
          <StatisticLine text="Average" value={opinions.average/sum}></StatisticLine>
          <StatisticLine text="Positive" value={opinions.good*100/sum}></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>No feedbacak given</p>
      </div>
    )
  }

}
const Button = ({ handleClicks}) => {
  return ( 
    <div>
        <button onClick={() => handleClicks("good")}>Good</button>
        <button onClick={() => handleClicks("neutral")} >Neutral</button>
        <button onClick={() => handleClicks("bad")}>Bad</button>
    </div>
  )
}
const App = () => {
  const [opinions, setOpinions] = useState({
    good: 0, neutral: 0, bad: 0, average: 0
  })
  const handleClicks = (name) => {
    const newopinion = {
      good: opinions.good,
      neutral: opinions.neutral,
      bad: opinions.bad,
      average: opinions.average
    }
    if (name === "good") {
      newopinion.good += 1
      newopinion.average += 1
    }
    else if (name === "neutral") newopinion.neutral += 1
    else {
      newopinion.bad += 1
      newopinion.average -= 1
    }
    setOpinions(newopinion)
  }
  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClicks={handleClicks}></Button>
      <h2>Statistics</h2>
      <Statistics opinions={opinions}></Statistics>
    </div>
  )
}
export default App
