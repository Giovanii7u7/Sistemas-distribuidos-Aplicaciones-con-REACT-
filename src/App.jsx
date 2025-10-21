import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

// ✅ MANTUVIMOS tu función de suma
const calculateTotal = (ex1, ex2, ex3) => {
  return ex1 + ex2 + ex3
}

const App = () => {
  const course = 'Half Stack application development'
  
  // CAMBIO: Convertir a objetos
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component', 
    exercises: 14
  }

  // ✅ MANTUVIMOS tu función, pero actualizamos los parámetros
  const totalExercises = calculateTotal(
    part1.exercises, 
    part2.exercises, 
    part3.exercises
  )

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}  // ← Ahora pasamos objetos
        part2={part2}
        part3={part3} 
      />
      <Total total={totalExercises} />
    </div>
  )
}

export default App