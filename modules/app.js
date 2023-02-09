let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly')
})
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! tu color favorito es el " + miColor);
}

logGreeting1("Brandon", "Verde");

require('./greet');
