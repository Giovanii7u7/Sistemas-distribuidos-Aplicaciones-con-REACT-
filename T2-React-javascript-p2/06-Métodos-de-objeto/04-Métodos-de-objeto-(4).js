const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name);
  }
};

// Llamada directa (funciona)
arto.greet(); // hello, my name is Arto Hellas

// Guardar referencia (pierde this)
const referenceToGreet = arto.greet;
referenceToGreet(); // hello, my name is undefined

// Usando setTimeout (pierde this)
setTimeout(arto.greet, 1000); // hello, my name is undefined

// Solución 1: bind
setTimeout(arto.greet.bind(arto), 2000); // hello, my name is Arto Hellas

// Solución 2: flecha como wrapper
setTimeout(() => arto.greet(), 3000); // hello, my name is Arto Hellas
