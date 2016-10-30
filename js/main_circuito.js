new Chartist.Line('.ct-chart');

$("#btn_calc").click(function() {
	
	let voltaje = parseFloat($( "#voltaje" ).val());
	let resistencia = parseFloat($( "#resistencia" ).val());
	let inductancia = parseFloat($( "#inductancia" ).val());
	let t = parseFloat($( "#t" ).val());

	if ($( "#voltaje" ).val() === "" || $( "#resistencia" ).val() == "" || $( "#inductancia" ).val() == "" || $( "#t" ).val() == "" ) {
		console.log("One of the elements is empty");
	} else {

    let result = obtenerCorrienteEnT(voltaje, resistencia, inductancia,t);

		console.log( result );

        $( "#equation" ).text(f);
        $( "#ft" ).text(ft);

        let x = [];

        for (var i = 0; i < t + 10; i++) {
            let str = "" + i;
            x.push(str);
        }

        console.log(x);

        let y = [];

        for (var i = 1; i <= t + 10; i++) {
            let temp = obtenerCorrienteEnT(voltaje, resistencia, inductancia,i);
            let str = "" + temp;
            y.push(str);
        }

        console.log(y);


        let data = {
          // A labels array that can contain any sort of values
          labels: x,
          // Our series array that contains series objects or in this case series data arrays
          series: [
            y
          ]
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line('.ct-chart', data);

	}
});



$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});