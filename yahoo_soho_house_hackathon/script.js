(function() {  
  var app = angular.module('Yahoohack', []);  

    app.controller('PictureController', ['$http' , '$scope', function($http, $scope){  
        
        $scope.flickerPics = []
        $scope.flickerPics2 = []
        $scope.next = 0
        $scope.answer = false
        $scope.tumblrPicGet = true

         $scope.showAnswer = function() {
            $scope.answer = tube_stations[$scope.next - 1]
         }

        $scope.nextDatum = function() {
            $scope.answer = false
            if($scope.tumblrPicGet == true) {
              $scope.getFlickerData(tube_stations[$scope.next])  
            } else {
              $scope.getFlickerData(tube_stations[$scope.next])
            }
            $scope.next++
        }


        $scope.getFlickerData = function(word) {
          
          word = word.split(" ")
          word1 = word[0]
          word2 = word[1]

          var url1 = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&text=" + word1 + "&format=json&api_key=5b782a475699614a38519d4cc6cd32c3&nojsoncallback=1"
          $http.get(url1).success(function(data) {
            $scope.flickerPics = data.photos.photo
        })
          if(word2) {
            var url2 = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&text=" + word2 + "&format=json&api_key=5b782a475699614a38519d4cc6cd32c3&nojsoncallback=1"
            $http.get(url2).success(function(data) {
              $scope.flickerPics2 = data.photos.photo
            })
          } else {
            $scope.flickerPics2 = []
          }

        }        

        $scope.getTumblrData = function(word) {
           word = word.split(" ")
          word1 = word[0]
          word2 = word[1]

          var url1 = "http://api.tumblr.com/v2/tagged?tag=" + word1 + "&api_key=HUjqOwDPzCmN6fwNChYuxjDYZbkXhblLvRXav19UNe6U5Va6LC"
          $http.get(url1).success(function(data) {
            $scope.tumblrPics = data.photos.photo
        })
          if(word2) {
            var url1 = "http://api.tumblr.com/v2/tagged?tag=" + word2 + "&api_key=HUjqOwDPzCmN6fwNChYuxjDYZbkXhblLvRXav19UNe6U5Va6LC"
            $http.get(url2).success(function(data) {
              $scope.flickerPics2 = data.photos.photo
            })
          } else {
            $scope.tumblrPics2 = []
          }
        }

        }]);


})();

tube_stations = ['Lancaster Gate', 'Archway',   'Chalk Farm' , 'Swiss Cottage','Elephant Castle', 'London Bridge' ,'Holland Park', 'Canary Wharf','Canon Street', 'Monument', 'Oxford Circus', 'Marble arch', 'Leicester Square', 'Mornington Crescent',  'Liverpool Street', 'Kings Cross', 'Green Park', 'Arsenal', 'Barbican', 'Barking' ,'Bethnal Green', 'Blackfriars', 'Bond Street', 'Boston Manor', 'Caledonian Road', 'Covent Garden' ,'Charing Cross' ]

good_tube_stations = ['Canary Wharf', 'Archway', 'Canon Street', 'Chalk Farm' , 'Elephant Castle','London Bridge', 'Swiss Cottage', 'Holland Park','Lancaster Gate' , 'Monument', 'Oxford Circus', 'Marble arch', 'Leicester Square', 'Mornington Crescent',  'Liverpool Street', 'Kings Cross', 'Green Park', 'Arsenal', 'Barbican', 'Barking' ,'Bethnal Green', 'Blackfriars', 'Bond Street', 'Boston Manor', 'Caledonian Road', 'Covent Garden', 'Charing Cross' ]
old_tube_stations = ['Acton Town', 'Aldgate', 'Amersham', 'Angel', 'Archway', 'Arnos Grove', 'Arsenal', 'Baker Street', 'Balham', 'Bank', 'Barbican', 'Barking', 'Barkingside', 'Barons Court', 'Bayswater', 'Becontree', 'Belsize Park', 'Bermondsey', 'Bethnal Green', 'Blackfriars', 'Blackhorse Road', 'Bond Street', 'Borough', 'Boston Manor', 'Bounds Green', 'Bow Road', 'Brent Cross', 'Brixton', 'Bromley-by-Bow', 'Buckhurst Hill', 'Burnt Oak', 'Caledonian Road', 'Camden Town', 'Canada Water', 'Canary Wharf', 'Canning Town', 'Cannon Street', 'Canons Park', 'Chalfont & Latimer', 'Chalk Farm', 'Chancery Lane', 'Charing Cross', 'Chesham', 'Chigwell', 'Chiswick Park', 'Chorleywood', 'Clapham Common', 'Clapham North', 'Clapham South', 'Cockfosters', 'Colindale', 'Colliers Wood', 'Covent Garden', 'Croxley', 'Dagenham East', 'Dagenham Heathway', 'Debden', 'Dollis Hill', 'Ealing Broadway', 'Ealing Common', 'Earls Court', 'East Acton', 'East Finchley', 'East Ham', 'East Putney', 'Eastcote', 'Edgware', 'Edgware Road', 'Edgware Road', 'Elephant & Castle', 'Elm Park', 'Embankment', 'Epping', 'Euston', 'Euston Square', 'Fairlop', 'Farringdon', 'Finchley Central', 'Finchley Road', 'Finsbury Park', 'Fulham Broadway', 'Gants Hill', 'Gloucester Road', 'Golders Green', 'Goldhawk Road', 'Goodge Street', 'Grange Hill', 'Great Portland Street', 'Green Park', 'Greenford', 'Gunnersbury', 'Hainault', 'Hammersmith', 'Hammersmith', 'Hampstead', 'Hanger Lane', 'Harlesden', 'Harrow & Wealdstone', 'Harrow-on-the-Hill', 'Hatton Cross', 'Heathrow Terminal 4', 'Heathrow Terminal 5', 'Heathrow Terminals 1, 2, 3', 'Hendon Central', 'High Barnet', 'High Street Kensington', 'Highbury & Islington', 'Highgate', 'Hillingdon', 'Holborn', 'Holland Park', 'Holloway Road', 'Hornchurch', 'Hounslow Central', 'Hounslow East', 'Hounslow West', 'Hyde Park Corner', 'Ickenham', 'Kennington', 'Kensal Green', 'Kensington (Olympia)', 'Kentish Town', 'Kenton', 'Kew Gardens', 'Kilburn', 'Kilburn Park', 'Kings Cross St. Pancras', 'Kingsbury', 'Knightsbridge', 'Ladbroke Grove', 'Lambeth North', 'Lancaster Gate', 'Latimer Road', 'Leicester Square', 'Leyton', 'Leytonstone', 'Liverpool Street', 'London Bridge', 'Loughton', 'Maida Vale', 'Manor House', 'Mansion House', 'Marble Arch', 'Marylebone', 'Mile End', 'Mill Hill East', 'Monument', 'Moor Park', 'Moorgate', 'Morden', 'Mornington Crescent', 'Neasden', 'Newbury Park', 'North Acton', 'North Ealing', 'North Greenwich', 'North Harrow', 'North Wembley', 'Northfields', 'Northolt', 'Northwick Park', 'Northwood', 'Northwood Hills', 'Notting Hill Gate', 'Oakwood', 'Old Street', 'Osterley', 'Oval', 'Oxford Circus', 'Paddington', 'Park Royal', 'Parsons Green', 'Perivale', 'Piccadilly Circus', 'Pimlico', 'Pinner', 'Plaistow', 'Preston Road', 'Putney Bridge', 'Queens Park', 'Queensbury', 'Queensway', 'Ravenscourt Park', 'Rayners Lane', 'Redbridge', 'Regents Park', 'Richmond', 'Rickmansworth', 'Roding Valley', 'Royal Oak', 'Ruislip', 'Ruislip Gardens', 'Ruislip Manor', 'Russell Square', 'Seven Sisters', 'Shepherds Bush', 'Shepherds Bush Market', 'Sloane Square', 'Snaresbrook', 'South Ealing', 'South Harrow', 'South Kensington', 'South Kenton', 'South Ruislip', 'South Wimbledon', 'South Woodford', 'Southfields', 'Southgate', 'Southwark', 'St. Jamess Park', 'St. Johns Wood', 'St. Pauls', 'Stamford Brook', 'Stanmore', 'Stepney Green', 'Stockwell', 'Stonebridge Park', 'Stratford', 'Sudbury Hill', 'Sudbury Town', 'Swiss Cottage', 'Temple', 'Theydon Bois', 'Tooting Bec', 'Tooting Broadway', 'Tottenham Court Road', 'Tottenham Hale', 'Totteridge & Whetstone', 'Tower Hill', 'Tufnell Park', 'Turnham Green', 'Turnpike Lane', 'Upminster', 'Upminster Bridge', 'Upney', 'Upton Park', 'Uxbridge', 'Vauxhall', 'Victoria', 'Walthamstow Central', 'Wanstead', 'Warren Street', 'Warwick Avenue', 'Waterloo', 'Watford', 'Wembley Central', 'Wembley Park', 'West Acton', 'West Brompton', 'West Finchley', 'West Ham', 'West Hampstead', 'West Harrow', 'West Kensington', 'West Ruislip', 'Westbourne Park', 'Westminster', 'White City', 'Whitechapel', 'Willesden Green', 'Willesden Junction', 'Wimbledon', 'Wimbledon Park', 'Wood Green', 'Wood Lane', 'Woodford', 'Woodside Park']