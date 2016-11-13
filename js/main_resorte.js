new Chartist.Line('.ct-chart');

$("#btn_calc").click(function() {
	
	let masa = parseFloat($( "#masa" ).val());
	let d_alargada = parseFloat($( "#d_alargada" ).val());
	let p_inicial = parseFloat($( "#p_inicial" ).val());
	let velocidad = parseFloat($( "#velocidad" ).val());
  let tiempo = parseFloat($( "#t" ).val());

	if ($( "#masa" ).val() === "" || $( "#d_alargada" ).val() == "" || $( "#p_inicial" ).val() == "" || $( "#velocidad" ).val() == "" ) {
		console.log("One of the elements is empty");
	} else {

    let result = resolver(masa, d_alargada, p_inicial, velocidad);

    $( "#equation" ).text( result.normal );
    //console.log(result.normal + "");
    $( "#ft" ).text(result.senoidal + "");
    //console.log(result.senoidal);

    let ft = getY(result.senoidal, tiempo);
    ft = Math.round(ft * 1000) / 1000;
    //console.log(ft);
    $( "#f" ).text( "X(" + tiempo + ") = " + ft );

    let x = [];

    for (var i = 0; i < tiempo + 0.05; i = i + 0.025) {
        let str = "" + Math.round(i * 1000) / 1000;;
        x.push(str);
    }

    //console.log(x);

    let y = [];

    for (var i = 0; i < x.length; i++) {
        let temp = getY( result.senoidal , x[i]);
        let str = "" + temp;
        y.push(str);
    }

    //console.log(y);


    let data = {
      // A labels array that can contain any sort of values
      labels: x,
      // Our series array that contains series objects or in this case series data arrays
      series: [
        y
      ]
    };

    let options = {
      axisX: {
        labelInterpolationFnc: function(value) {
           // If value is numeric, only return integers
           return (isNaN(value) || value % 0.25 == 0 ) ? value : " ";  //returning a space still draws grid lines
        }
      }
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    new Chartist.Line('.ct-chart', data, options);

	}
});



$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});