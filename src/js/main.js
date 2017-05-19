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
	var directionsDisplay = new google.maps.DirectionsRenderer;
	
	directionsDisplay.setMap(map);

	var calculateAndDisplayRoute=function(directionsService, directionsDisplay) {
		directionsService.route({
			origin: inputInicio.value,
			destination: inputDestino.value,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
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