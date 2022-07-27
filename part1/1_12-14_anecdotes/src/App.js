import { useState } from 'react'

const Button = ({onClick, text}) => {
	return (
		<div style={{display: "inline"}}>
			<button onClick={onClick}>{text}</button>
		</div>
	)
}

const App = () => {

	const getRandom = () => {
		const randomized = Math.floor(Math.random() * (anecdotes.length))
		setSelected(randomized)
	}

	const addVote = () => {
		const copy = [...tab]
		copy[selected] += 1
		setTab(copy)
	}

	const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
	const [tab, setTab] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)

  return (
    <div>
			<h1>Anecdote of the day</h1>
      {anecdotes[selected]}
			<p>Has {tab[selected]} votes </p>
			<Button style={{display: "inline"}} onClick={addVote} text="vote" />
			<Button onClick={getRandom} text="next anecdote" />
			<h1>Anecdote with most votes</h1>
			{anecdotes[tab.indexOf(Math.max(...tab))]}
    </div>
  )
}

export default App

