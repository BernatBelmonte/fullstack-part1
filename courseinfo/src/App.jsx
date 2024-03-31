


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  const part1 = props.course[0]
  const part2 = props.course[1]
  const part3 = props.course[2]
  return (
    <div>
      <Part p={part1.name} ex={part1.exercises}></Part>
      <Part p={part2.name} ex={part2.exercises}></Part>
      <Part p={part3.name} ex={part3.exercises}></Part>
    </div>
  )
}
const Part = (props) => {
  const {p, ex} = props
  return (
    <div>
      <p>
        {p}: {ex}
      </p>
    </div>
  )
}
const Total = (props) => {
  const {ex1, ex2, ex3} = props
  return (
    <div>
      <p>Number of exercises: {ex1 + ex2 + ex3}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}></Header>
      <Content course={course.parts}></Content>
      <Total ex1={course.parts[0].exercises} ex2={course.parts[0].exercises} ex3={course.parts[0].exercises}></Total>
    </div>
  )
}

export default App