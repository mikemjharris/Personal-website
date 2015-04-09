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
		
		var x = 51.45829; 
		var y = -0.14857;
		
		var x2 = 51.47903; 
		var y2 = -0.15784;
		
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
		
		var mapOptions3 = {
          center: new google.maps.LatLng(x, y),
          zoom: 14,
		  styles: grayStyles,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
        };
	
		var mapOptions2 = cloneObject(mapOptions) /*cloneObject(mapOptions)*/
	
		delete mapOptions2["styles"]
		mapOptions2["center"] = new google.maps.LatLng(x, y)
		
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions2);
		
		var mapOptions4 = cloneObject(mapOptions3) /*cloneObject(mapOptions)*/
	
		delete mapOptions4["styles"]
		mapOptions4["center"] = new google.maps.LatLng(x2, y2)
		
		var map2 = new google.maps.Map(document.getElementById("map_canvas2"),
            mapOptions4);
		
		var myLatlng = new google.maps.LatLng(51.45829,-0.14857);
		
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Restore Fitness!'
		});
		
		var myLatlng2 = new google.maps.LatLng(51.47903, -0.15784);
			var marker = new google.maps.Marker({
			position: myLatlng2,
			map: map2,
			title: 'Restore Fitness!'
		});
        
        }
		
		