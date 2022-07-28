import React from 'react'

const Single = ({course}) => {
	const sum = course.parts.reduce(
		(previousValue, currentValue) => previousValue + currentValue.exercises, 0
	);
	return (
		<div>
			<h1>{course.name}</h1>
			<div>
				{course.parts.map(part => (
					<p key={part.id}>{part.name} {part.exercises}</p>
				))}
			</div>
			<div>
				<p><strong>Total of {sum}</strong></p>
			 </div>
		</div>
	)
}

const Course = ({courses}) => {
	return (
		<div>
			<h1>Web development curriculum</h1>
			<div>
				{courses.map(course => (<Single key={course.id} course={course} />))}
			</div>
		</div>
	)
}

export default Course