"use strict" 

//version simplificada 

// const calculadora = (a, b, operacion) => operacion(a, b) 

// console.log(calculadora(13, 7, suma)) 

// console.log(calculadora(13, 7, resta)) 

//funcion estandar/primer orden function suma(a, b) { return a + b } function resta(a, b) { return a - b } 

//Funciòn de orden mayor function calculadora(a, b, operacion){ 

//callback -> comportamiento de ejecutar el parametro como una funcion return operacion(a, b) } console.log(calculadora(13, 7, suma)) console.log(calculadora(13, 7, resta)) 

//EJERCICIO: 
// CREAR UNA CALCULADORA/Funcion de orden mayor, que ejecute como callback, las funciones de multiplicar y dividar. Tienes que hacer la funcion de multiplicar como una de primer orden y la de dividir, tiene que ser un arrow function 

//orden mayor
function calc(a,b,opt){
	return opt(a,b);
}

//primer orden
function multiply(a,b){
	if(a != 0 && b != 0){
		return a * b;
	}else{
		return 0;
	}
}

//primer orden
const divide = (a, b) => a / b;

//arrow function
const suma = (a, b) => a + b;

//arrow function
const resta = (a, b) => a - b;

console.log(calc(5,5,suma));
console.log(calc(5,5,resta));
console.log(calc(5,5,multiply));
console.log(calc(5,5,divide));
