import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
//componente para calcular el total de ejercicios
//este es un ejemplo de función auxiliar
const calculateTotal = (ex1, ex2, ex3) => {
  return ex1 + ex2 + ex3
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // Usamos la función para calcular el total
  const totalExercises = calculateTotal(exercises1, exercises2, exercises3)

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3}
      />
      <Total total={totalExercises} />
    </div>
  )
}

export default App
