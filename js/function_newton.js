let f = "";
let ft = "";

function newton(tm,c,k,t){
  
  let x = k*t;
  //console.log("The value of k*t is: " + x);
  let euler = Math.exp(x);
  //console.log( "The value of e^kt is: " + euler);
  let product = c * euler;
  //console.log( "The value of c(e^kt) is: " + product);
  let result = product + tm;
  //console.log( "The value of c(e^kt) + tm is: " + result);
  k = Math.round(k * 100) / 100;
  tm = Math.round(tm * 100) / 100;
  c = Math.round(c * 100) / 100;
  f = "f(t) = " + c + "(e^" + k + "t) + " + tm;
  console.log(f);
  result = Math.round(result * 100) / 100;
  ft = "f(" + t + ") = " + result;
  console.log(ft);
  return result;
}

function obtenerC(Tincial, Tambiente){
  //console.log( "The value of C is: " + (Tincial - Tambiente) );
  return Tincial - Tambiente;
}

function esPositivaLaDivision(a,b){
  //Esta funcion nos ayuda a prevenir el ingresar un numero negativo
  //A la hora de evaluar el logaritmo natural.
  let aEsNegativo = a < 0;
  let bEsNegativo = b < 0;
  return aEsNegativo == bEsNegativo; 
}

function obtenerK(Tsegunda, Tambiente, c, tiempoConocido){
  
  let numerador = Tsegunda - Tambiente;
  
  if (esPositivaLaDivision(numerador,c)){
    let division = numerador / c;
    //console.log( "The value of K is: " + Math.log(division) / tiempoConocido ); 
    return Math.log(division) / tiempoConocido;
  } else {
    console.log( "Error. La division da negativo. \n" );
  }
  
}
