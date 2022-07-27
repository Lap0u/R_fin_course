const Header = (props) => {
	return (
		<div>
			<h1>{props.course.name}</h1>
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>{props.text} {props.num}</p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part text={props.course.parts[0].name} num={props.course.parts[0].exercises} />
			<Part text={props.course.parts[1].name} num={props.course.parts[1].exercises} />
			<Part text={props.course.parts[2].name} num={props.course.parts[2].exercises} />
		</div>
	)
}

const Total = (props) => {
	const sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
	return (
		<div>
			<p>Number of exercises {sum}</p>
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
		<Header course={course} />
		<Content course={course} />
		<Total course={course} />
	  </div>
	)
  }
  
  export default App