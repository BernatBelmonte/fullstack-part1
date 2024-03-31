import { useState } from "react"

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(
        [0,0,0,0,0,0,0,0]
    )
    const [biggest, setBiggest] = useState(
        {
        votes: 0,
        index: 0
        }
    )
    function add1(votes, selected) {
        const aux = [...votes]
        aux[selected] += 1
        setVotes(aux)
        handleBiggest(votes)
    }
    function handleBiggest(votes) {
        const aux = {
            votes:0,
            index:0
        }
        for (var i = 0; i < votes.length; ++i) {
            if (votes[i] > aux.votes){
                aux.index = i
                aux.votes = votes[i]
            } 
        }
        setBiggest(aux)

    }
    return (
        <div>
            <h2>Anectode of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p><b>Votes: {votes[selected]}</b></p>
            <button onClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length)))}>Random</button>
            <button onClick={() => add1(votes, selected)}>Vote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[biggest.index]}{votes[biggest.index]}</p>
        </div>
    )
}
export default App
