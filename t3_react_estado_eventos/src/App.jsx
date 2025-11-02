import React, { useState } from "react";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  // Estado para el contador
  const [counter, setCounter] = useState(0);

  // Incrementa el contador cada segundo
  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <h2>Counter: {counter}</h2>
    </div>
  );
};

export default App;
