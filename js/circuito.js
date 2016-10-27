function corriente(A,B,C){
	let ecuaccion = "El valor de I(t) es: I(t) = " + A + " " + C + "e^(" + B + "t)";
	console.log(ecuaccion);
	return ecuaccion;
}

function obtenerA(E,resistencia) {
	let A = (E/resistencia);
	console.log("El valor de A: " + A);
	return A;
}

function obtenerB(resistencia, inductacia) {
	let B = -1 * (resistencia/inductacia);
	console.log("El valor de B: " + B);
	return B;
}

function obtenerC(E, resistencia){
	let c = -(E/resistencia);
	console.log("El valor de C: " + c);
	return c;
}

function obtenerCorrienteEnT(E, resistencia, inductacia) {
	let A = obtenerA(E,resistencia);
	let B = obtenerB(resistencia,inductacia);
	let C = obtenerC(E, resistencia);

	corriente(A,B,C);
}

obtenerCorrienteEnT(12, 10, 0.5);

console.log("\n");

obtenerCorrienteEnT(30, 50, 0.1);

