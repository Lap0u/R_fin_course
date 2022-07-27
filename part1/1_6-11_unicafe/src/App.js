import { useState } from 'react'

const Button = (props) => {
	return (
		<button onClick={props.onClick}>{props.text}</button>
	)
}

const StaticLine = ({name, count, sign}) => {
	return (
		<tr>
			<td>{name}</td>
			<td> {count} {sign}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad}) => {
	if (good + neutral + bad === 0) {
		return (
			<div>
				<tr>No feedback given</tr>
			</div>
		)
	}
	const total = good + neutral + bad
	const average = (good + bad * -1) / total
	const positive = good / total * 100
	return (
		<div>
			<th colSpan="2"><h1>statistics</h1></th>
			<StaticLine name="good" count={good} />
			<StaticLine name="neutral" count={neutral} />
			<StaticLine name="bad" count={bad} />
			<StaticLine name="all" count={good + neutral + bad} />
			<StaticLine name="average" count={average} />
			<StaticLine name="positive" count={positive} sign="%"/>
		</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const increaseGood = () => setGood(good + 1)
	const increaseNeutral = () => setNeutral(neutral + 1)
	const increaseBad = () => setBad(bad + 1)

	return (
		<div>
			<h1>Give feedback</h1>
			<Button onClick={increaseGood} text="good" />
			<Button onClick={increaseNeutral} text="neutral" />
			<Button onClick={increaseBad} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</div>
		)
}

export default App