	function cloneObject(obj) {
        var clone = {};
        for(var i in obj) {
            if(typeof(obj[i])=="object")
                clone[i] = cloneObject(obj[i]);
            else
                clone[i] = obj[i];
        }
        return clone;
    }

function initialize() {
		
		var x = 51.520779 + (Math.random()-0.5)/10; 
		var y = -0.090922 + (Math.random()-0.5)/10; 
		
		
		var grayStyles = [
        {
          featureType: "all",
          stylers: [
            { saturation: -90 },
            { lightness: 50 }
          ]
        },
      ];
		
    	var mapOptions = {
          center: new google.maps.LatLng(x, y),
          zoom: 14,
		  styles: grayStyles,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var panoramaOptions = {
			position: new google.maps.LatLng(x, y),
			pov: {
			heading: 54,
			pitch: 5,
			zoom: 1
		}
};
	
		var mapOptions2 = cloneObject(mapOptions) /*cloneObject(mapOptions)*/
	
		delete mapOptions2["styles"]
		mapOptions2["center"] = new google.maps.LatLng(x, y)
		
		
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions2);
		
		
		/*var map = new google.maps.Map(document.getElementById("map_canvas3"),
            mapOptions);*/
			
		var panorama = new  google.maps.StreetViewPanorama(document.getElementById("map_canvas3"), panoramaOptions);
		map.setStreetView(panorama);
        
        }
		
		