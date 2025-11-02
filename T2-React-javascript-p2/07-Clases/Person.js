class Person {
  name; // declaración opcional de la propiedad

  constructor(name) {
    this.name = name; // inicializa la propiedad name del objeto
  }

  introduceSelf() {
    console.log(`¡Hola!, soy ${this.name}`);
  }
}

// Crear una nueva instancia de Person
const gil = new Person("Gil");

// Llamar al método introduceSelf de la instancia
gil.introduceSelf(); // ¡Hola!, soy Gil



