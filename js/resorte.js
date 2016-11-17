function resolver(masa, d_alargada, p_inicial, velocidad) {
	
	let ecuacionNormal = obtenerNormal(masa, d_alargada, p_inicial, velocidad);
	let ecuacionSenoidal = obtenerSenoidal(masa, d_alargada, p_inicial, velocidad);

	return { normal : ecuacionNormal, senoidal: ecuacionSenoidal}
}

function obtenerNormal(masa, d_alargada, p_inicial, velocidad) {
	
	d_alargada = convertir(d_alargada);
	p_inicial = convertir(p_inicial);

	let k = obtenerK(masa, d_alargada);
	let m = obtenerM(masa);
	let W2 = obtenerW2(k,m);
	let W = obtenerW(W2);
	let C1 = obtenerC1(p_inicial);
	let C2 = obtenerC2(velocidad, W);
	W = Math.round(W * 1000) / 1000;
	
	//console.log(k);
	//console.log(m);
	//console.log(W2);
	//console.log(W);
	//console.log(C1);
	//console.log(C2);
	
	let signo2 = "";

	if(C2 > 0){
		signo2 = "+"
	}

	let ecuacionNormal = "X(t) = " + C1 + "cos("+ W + "t) " + signo2 + C2 + "sin(" + W + "t)";
	//console.log(ecuacionNormal);
	
	return ecuacionNormal;
}

function obtenerSenoidal(masa, d_alargada, p_inicial, velocidad) {
	
	d_alargada = convertir(d_alargada);
	p_inicial = convertir(p_inicial);

	let k = obtenerK(masa, d_alargada);
	let m = obtenerM(masa);
	let W2 = obtenerW2(k,m);
	let W = obtenerW(W2);
	let C1 = obtenerC1(p_inicial);
	let C2 = obtenerC2(velocidad, W);
	W = Math.round(W * 1000) / 1000;
	
	//console.log(k);
	//console.log(m);
	//console.log(W2);
	//console.log(W);
	//console.log(C1);
	//console.log(C2);
	
	let A = obtenerA(C1,C2);
	//console.log(A);

	let phi = obtenerPhi(C1,C2);
	console.log(phi);

	
	let signo = "";

	if(phi > 0){
		signo = "+"
	}

	let senoidal = "X(t) = " + A + "sin("+ W + "t " + signo + phi + ")";
	//console.log(senoidal);
	
	return senoidal;
	
}

function obtenerA(C1, C2) {
	let a = Math.pow( (C1 * C1 + C2 * C2) , 0.5 )
	return Math.round(a * 1000) / 1000;
}

function obtenerPhi(C1, C2) {
	console.log("C1: " + C1 + " C2: " + C2)
	let phi = Math.atan(C1/C2);
	
	if (Math.cos(phi) > 0) {
		phi = phi + Math.PI;
	}
	
	return Math.round(phi * 1000) / 1000;
}

function obtenerC1(xo) {
	return Math.round(xo * 1000) / 1000;
}

function obtenerC2(v1,w) {
	return Math.round((v1/w) * 1000) / 1000;
}

function obtenerM(weight) {
	return weight/32;
}

function obtenerK(weight,d) {
	return weight/d;
}

function obtenerW2(k,m) {
	return k/m;
}

function obtenerW(w2) {
	w2 = Math.pow( Math.abs(w2) , 0.5);
	return w2;
}

function convertir(inc) {
	let pies = inc / 12;
	return Math.round(pies * 100) / 100;
}

function getY( func, t ) {
	let a = func.split("X(t) =").join( "" );
	let str = a.split("t").join( "(" + t + ")" );
	//console.log( str );
	let result = math.eval(str);
	//console.log( "f(" + x + ") = " + result );
	return result;
}






