function initMap() {

	var lima = {lat: -12.1191427, lng: -77.0349046};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: lima,
		mapTypeControl:false,
		zoomControl: false,
		streetViewControl:false
	});


	var inputInicio = document.getElementById("inicio");
	var inputDestino = document.getElementById("destino");
	
	var autocomplete1 = new google.maps.places.Autocomplete(inputInicio);
	var autocomplete2 = new google.maps.places.Autocomplete(inputDestino);

	var buttonTrazar = document.getElementById("buscarRuta");



	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer({
    	polylineOptions: {
      		strokeColor: "#F6A623"
    	}
  	});
	
	directionsDisplay.setMap(map);

	var calculateAndDisplayRoute=function(directionsService, directionsDisplay) {
		directionsService.route({
			origin: inputInicio.value,
			destination: inputDestino.value,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
		}, function(response, status) {
			if (status === 'OK') {
				$("#map").addClass("nuevo-height");
				directionsDisplay.setDirections(response);
				directionsDisplay.setPanel($("#hola"));
				$("#primer-elemento").removeClass("hidden");
				$("#segundo-elemento").removeClass("hidden");

			} else {
				window.alert("No encontramos una ruta :(");
			}
		});	
	}
	
	var trazarRuta = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};

	buttonTrazar.addEventListener("click",trazarRuta);
}