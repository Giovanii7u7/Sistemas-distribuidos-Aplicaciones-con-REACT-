
// Clase Person
class Person {
  name; // declaración opcional de la propiedad

  constructor(name) {
    this.name = name; // inicializa la propiedad name del objeto
  }

  introduceSelf() {
    console.log(`¡Hola!, soy ${this.name}`);
  }
}

// Clase Professor que hereda de Person

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}



const walsh = new Professor("Walsh", "Psicología");
walsh.introduceSelf(); // 'Mi nombre es Walsh, yo seré tu profesor de Psicología'

walsh.grade("mi tarea"); // una calificación aleatoria