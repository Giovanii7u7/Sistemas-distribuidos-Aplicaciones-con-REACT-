import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

// ✅ MANTENEMOS tu función de suma
const calculateTotal = (ex1, ex2, ex3) => {
  return ex1 + ex2 + ex3
}

const App = () => {
  const course = 'Half Stack application development'
  
  // NUEVO: Array de objetos
  const parts = [
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

  // ✅ MANTENEMOS tu función, actualizando los parámetros
  const totalExercises = calculateTotal(
    parts[0].exercises,    // ← Accedemos por índice del array
    parts[1].exercises, 
    parts[2].exercises
  )

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />  {/* ← Pasamos el array completo */}
      <Total total={totalExercises} />
    </div>
  )
}

export default App