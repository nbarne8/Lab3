	var map = L.map('map').setView([30, -90], 4);

	var streets = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var german = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var Lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA"
	}).addTo(map);

	var Humidity = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_relhumidity_offsets/MapServer/WMSServer", {
		layers: '1',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
		opacity: 0.25
	}).addTo(map);

	var Precipitation = L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer", {
		layers: '1',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
	}).addTo(map);

	var baseLayers = {
	    "Streets": streets,
			"German": german
	};

	var overlays = {
	    "Lightning": Lightning,
	    "Humidity": Humidity,
			"Precipitation": Precipitation
	};

	L.control.layers(baseLayers, overlays).addTo(map);
