const arto = {
    name: 'Arto Hellas',
    greet: function() {
        console.log('hello, my name is ' + this.name);
    },
};

// Esto NO funciona correctamente, this apunta al objeto global
// setTimeout(arto.greet, 1000);

// Solución: usamos bind para fijar this a arto
setTimeout(arto.greet.bind(arto), 1000);
