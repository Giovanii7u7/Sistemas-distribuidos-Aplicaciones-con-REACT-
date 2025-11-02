

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

// Clase Student que hereda de Person
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(
      `¡Hola! me llamo ${this.name} y estoy en el año ${this.#year}.`,
    );
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}


const summers = new Student("Summers", 2);

summers.introduceSelf(); // ¡Hola! me llamo Summers y estoy en el año 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError (Error de sintaxis)