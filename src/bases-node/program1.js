////////////////////////////
let cont = 0;
const multiply = (stNum,ndNum) => {
	let result = 0;
	for(cont = 0; cont < ndNum; cont++){
		result += stNum;
	}
	return console.log(`The result (multiply) is: ${result}`);
}
multiply(5,2);

////////////////////////////
let ndCont = 0;
const duply = (string) => {
	let result = [];
	for(ndCont = 0; ndCont < string.length; ndCont++){
		result.push(string[ndCont]);
		result.push(string[ndCont]);
	}
	result = result.join("");
	console.log(`The result (duply) is: ${result}`);
}
duply("Hola");

////////////////////////////
const duply2 = (string) => {
	const newArray = Array.from(string);
	let result = newArray.map((item)=>item+item)
	result = result.join("");
	console.log(`The result (duply2) is: ${result}`);
}
duply2("Hola");
