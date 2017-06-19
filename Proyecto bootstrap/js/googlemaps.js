function mapaGoogle(){
	/*obtenim l'element on dibuixarem el mapa en la pàgina */
	var elementMapa=document.getElementById('map');
	/* definim les opcions del mapa*/

	var options = {
		zoom: 3
		, center: new google.maps.LatLng(35.719907, -43.623518) /*oceà Atlàntic*/
		, mapTypeId: google.maps.MapTypeId.SATELLITE
		, backgroundColor: '#ffffff'
 		, noClear: true
		, disableDefaultUI: true		
		, zoomControl: true
		, keyboardShortcuts: true
		, disableDoubleClickZoom: true
		, draggable: true
		, scrollwheel: true
		, draggableCursor: 'hand'
		, draggingCursor: 'hand'
		, mapTypeControl: true
		, mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
			, position: google.maps.ControlPosition.TOP_RIGHT
			, mapTypeIds: [
				google.maps.MapTypeId.ROADMAP
				, google.maps.MapTypeId.SATELLITE
				, google.maps.MapTypeId.HYBRID
				, google.maps.MapTypeId.TERRAIN
			]
		}
		, navigationControl: true
		, navigationControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
			, style: google.maps.NavigationControlStyle.ZOOM_PAN
		}
		, streetViewControl: true
		, navigationControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
			, style: google.maps.NavigationControlStyle.ANDROID
		}
		, scaleControl: true
		, scaleControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
			, style: google.maps.ScaleControlStyle.DEFAULT
		}
		, rotateControl: true
		, rotateControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
			, style: google.maps.ScaleControlStyle.DEFAULT
		}
	};
	
	/* contingut de la finestra que s'obri quan fem clic, en HTML*/
	var contingutBenidorm = '<div id="content" style="background-color:#DDD;color:black;">'+
      '<h1 >IES Pere Maria Orts i Bosch</h1>'+
      '<div id="informacio" style="padding:10px;margin:10px;">'+
      '<p style="text-align:justify;padding:10px;margin:10px;">Partida del Salt de l\'Aigua<br/>'+
	  'Carrer Barca del Bou, 9<br/>Benidorm</p> ' +
      '<ul><li><strong>Nivells</strong>: ESO / Batxillerat / FPB / Cicles Formatius</li> '+
	  '<li><strong><a href="http://iesperemaria.edu.gva.es/iesperemaria/">Lloc Web</a></strong></li>'+
      '</ul><p style="text-align:center;padding:10px;margin:10px;"><a href="img/iesperemaria.jpg">'+
	  '<img src="../img/googlemaps/iesperemaria.jpg" alt="IES Pere Maria" width="200"/></a></p>'+
	  '</div>'+
      '</div>';
	  
	/*declarem la funció que s'executarà quan fem clic al marker*/
	var infowindowBenidorm = new google.maps.InfoWindow({
    content: contingutBenidorm
	});

	/*declarem el mapa*/
	var map = new google.maps.Map(elementMapa, options);
	
	/*carreguem la imatge complexa del marker*/
	var imatgeTaronja = {
		//imatge que assignarem al marker
		url: '../img/googlemaps/markerOrange.png',
		// El marker tindrà 20 pixels d'ample per 32 pixels d'alt.
		scaledSize: new google.maps.Size(20, 32),
		// L'origen d'aquesta imatge és (0, 0).
		origin: new google.maps.Point(0, 0),
		// L'àncora per aquesta imatge serà el pic inferior (10, 32).
		anchor: new google.maps.Point(10, 32)
	};
	/*declarem el marker i l'assignem al mapa*/
	var markerBenidorm = new google.maps.Marker({
		position: {lat: 38.553437, lng: -0.120647} /*Benidorm, IES Pere Maria Orts */
		,	map: map
		,	icon: imatgeTaronja
		,   animation: google.maps.Animation.DROP
		,	title: 'IES Pere Maria Orts'
	});

	//Assignem al marker una escolta que execute la funció infowindow al fer clic
	markerBenidorm.addListener('click', function() {
		infowindowBenidorm.open(map, markerBenidorm);
	});
	
	/*************************************************************************************/
	
	/* contingut de la finestra que s'obri quan fem clic, en HTML*/
	var contingutNewYork = '<div id="content" style="background-color:#DDD;color:black;">'+
      '<h1>The Factory</h1>'+
      '<div id="informacio" style="padding:10px;margin:10px;">'+
      '<p style="text-align:justify;padding:10px;margin:10px;">33 Union Square W,<br/>New York</p> ' +
	  '<img src="../img/googlemaps/theFactoryDeckerBuilding.jpg" alt="The Factory" width="200"/></a></p>'+
	  '</div>'+
      '</div>';
	  
	/*declarem la funció que s'executarà quan fem clic al marker*/
	var infowindowNewYork = new google.maps.InfoWindow({
    content: contingutNewYork
	});
	
	/*carreguem la imatge complexa del marker*/
	var imatgeBlava = {
		//imatge que assignarem al marker
		url: '../img/googlemaps/markerBlue.png',
		// El marker tindrà 20 pixels d'ample per 32 pixels d'alt.
		scaledSize: new google.maps.Size(20, 32),
		// L'origen d'aquesta imatge és (0, 0).
		origin: new google.maps.Point(0, 0),
		// L'àncora per aquesta imatge serà el pic inferior (10, 32).
		anchor: new google.maps.Point(10, 32)
	};
	

	/*declarem el marker i l'assignem al mapa*/
	var markerNewYork = new google.maps.Marker({
		position: {lat: 40.736650, lng: -73.990798}  /*New York, The Factory, Decker Building*/
		,	map: map
		,	icon: imatgeBlava 
		,   animation: google.maps.Animation.DROP
		,	title: 'The Factory'
	});
	//Assignem al marker una escolta que execute la funció infowindow al fer clic
	markerNewYork.addListener('click', function() {
		infowindowNewYork.open(map, markerNewYork);
	});
}
/*Quan acabe de carregar-se la pàgina, executa la funció mapaGoogle*/
window.addEventListener('load',mapaGoogle,false);