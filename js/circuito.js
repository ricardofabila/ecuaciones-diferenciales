let f = "";
let ft = "";

function obtenerEcuaccion(A,B,C){
	let ecuaccion = A + " " + C + "e^(" + B + "t)";
	//console.log("El valor de I(t) es: I(t) = " + ecuaccion);
	f = "f(t) = " + ecuaccion;
	return ecuaccion;
}

function corriente(A,B,C,t){
	let producto = B * t;
	console.log(producto);
	let euler = Math.exp( producto );
	console.log(euler);
	let resultado = A + (C * euler );
	console.log(resultado);
	ft = "f(" + t + ") = " + resultado;
	return resultado;
}

function obtenerA(E,resistencia) {
	let A = (E/resistencia);
	//console.log("El valor de A: " + A);
	return A;
}

function obtenerB(resistencia, inductacia) {
	let B = -1 * (resistencia/inductacia);
	//console.log("El valor de B: " + B);
	return B;
}

function obtenerC(E, resistencia){
	let c = -(E/resistencia);
	//console.log("El valor de C: " + c);
	return c;
}

function obtenerCorrienteEnT(E, resistencia, inductacia,t) {
	let A = obtenerA(E,resistencia);
	let B = obtenerB(resistencia,inductacia);
	let C = obtenerC(E, resistencia);

	obtenerEcuaccion(A,B,C);
	return corriente(A,B,C,t);
}

//obtenerCorrienteEnT(12, 10, 0.5,1);

//console.log("\n");

//obtenerCorrienteEnT(30, 50, 0.1,1);

