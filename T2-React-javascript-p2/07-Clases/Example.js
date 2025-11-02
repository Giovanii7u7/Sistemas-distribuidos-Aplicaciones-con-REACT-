class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("¿Me llamaste?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // '¿Me llamaste?'

// Intentar llamar al método privado desde fuera de la clase resultará en un error
//myExample.#somePrivateMethod(); // SyntaxError (Error de Sintaxis)