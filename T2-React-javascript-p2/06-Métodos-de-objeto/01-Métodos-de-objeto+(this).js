const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is '+ this.name)
    },
}

// Prueba el método
arto.greet() // Debería imprimir: "hello, my name is Arto Hellas"
