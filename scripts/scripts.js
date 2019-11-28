/*console.log("Tsest");

function saludar(persona) {
  return `Hola hermosa , ${persona};`;
}

console.log(saludar("dani"));
console.log(saludar("bryan"));

//ejercicio uno

function saludar(persona, sexo) {
  return sexo === "m" ? `Bienvenido, ${persona}` : `Bienvenido, ${persona}`;
}

console.log(saludar("eduardo", "m"));
console.log(saludar("lina", "f"));

//ejercicio dos

function saludar(persona, sexo) {
  let saludo = sexo === "m" ? "Bienvenido" : "Bienvenida";
  return `${saludo} a , ${persona}`;
}

console.log(saludar("beto", "m"));
console.log(saludar("Dani", "f"));

//funciones de Flecha (mejor forma para una funcion)

const saludar = (persona, sexo) => {
  let saludo = sexo === "m" ? "Bienvenido" : "Bienvenida";
  return `${saludo} a, ${persona}`;
};

console.log(saludar("alejo", "m"));
console.log(saludar("lina", "f"));*/

//ejercicio

/*const sumar = (a, b) => a + b;
console.log(sumar(4, 5));
console.log(sumar(8,1));*/

/*const sumarTodos = (...numeros) => {
  console.log(numeros[4]);
};

sumarTodos(1, 2, 3, 4, 5, 6);*/

/*for (let i = 0; i <= 9; i++) {
  console.log("este es el valor de i", i);
}*/

//ejemplo 2

/*const sumarTodos = (...numeros) => {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
};

console.log (sumarTodos(1,2,3,4,5,6,7))*/

/*function sumar(x) {
  return function(y) {
    return x + y;
  };
}

//closure
console(sumar(5)(2));*/

let a = "Hola";

const saludar = (saludo, persona) => `${saludo} ${persona}`;

c(saludar(a, "luis"));
c(a);
