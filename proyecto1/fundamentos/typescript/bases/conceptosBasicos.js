// observador/observable (ts) -> permiter ejecutar el código todo el tiempo, se usa mediante 'tsc --watch archivo.ts' en la terminal (rec. git bash)
//observador/observable (js) -> permiter ejecutar el código todo el tiempo, se usa mediante 'node --watch archivo.js' en la terminal (rec. git bash)
// console.log('Holi');
// Inferencia de tipos -> en ts importa el tipo de variable
// Declaración implicita
let miNumero = 10;
miNumero = 30;
// Declaración explicita
// 1.Definimos el tipo de variable
let miNumero2;
// 2.Asignamos un valor según el tipo declarado
miNumero2 = 5;
// console.log(miNumero2);
// Tipos de datos en ts -> existen tres tipos de datos
// 1. Datos primitivos -> básicos (string, number, boolean, undefined, null)
// string -> texto
let nombre;
// number -> numero
let numeros;
// boolean -> true or false
let proposicion;
// undefined -> indefinido
let indefinido;
// null -> nulo
let nulo;
nombre = 'Jose';
numeros = 10;
proposicion = true;
indefinido = undefined;
nulo = null;
// 2. Datos especiales (array, objects, unknow, any)
// Declaración implicta
let arreglo = [1, 2, 3];
arreglo = [4, 5, 6];
// Declaración explicita 
let arreglo2;
let arreglo3;
let arreglo4;
arreglo2 = [100, 5, 74];
arreglo3 = ['luisa', 'carlos',];
arreglo4 = [true, false, false];
// Otra forma de declarar explicitamente 
let miArreglo;
miArreglo = ['jose', 'eduardo'];
// unknow, any 
let desconocido; // Aún no sabemos el tipo de dato
let cualquiera; // No importa el dato, guarda la varible 
desconocido = 'luisa';
desconocido = 3;
desconocido = [true, false, false];
cualquiera = false;
cualquiera = undefined;
cualquiera = null;
// objects
let miObjeto;
// Nota: Asignación (=) y declaración (:)
// Nota2: ts toma los arreglos de datos como objetos -> miObjeto = [];
miObjeto = {};
// forma explicita de un objeto
let miObjetoCarro;
miObjeto = {
    hp: 12.5,
    marca: 'bmw',
    vendido: false
};
// Funciones -> pueden devolver valores o no
let retorno;
function miFuncion1() {
}
;
// ejecutar función
miFuncion1();
// Guardar en una variable
retorno = miFuncion1();
console.log(retorno);
// le puedo dar parametros a la variable, donde asignamos los tipos.
const miFuncion2 = (num1, num2) => {
    return num1 * num2;
};
retorno = miFuncion2(5, 4);
console.log(retorno);
// indicamos el tipo de dato que vamos a recibir
function miFuncion3(num1, num2) {
    return num1 + num2;
}
;
retorno = miFuncion3(5, 5);
console.log(retorno);
