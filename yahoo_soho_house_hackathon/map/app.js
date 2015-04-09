(function() {  

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

  var app = angular.module('ThreebeardsYahoo', []);  

    app.controller('FlickrController', ['$http' , '$scope', '$interval', function($http, $scope, $interval){  

    $scope.flickrPhotos = [];
    $scope.flickrPhotoIds = [];
    $scope.flickrPhotoInfo = "";
    $scope.flickrPhotoUrls = [];
    $scope.flickrPhotosx = [];
    $scope.url = "";
    $scope.musicGenre = ['graffita%20art', 'modern%20art', 'contemporary%20art', 'impressionism', 'jazz%20music', 'rock%20music', 'disco%20music', 'clubs', 'fashion', 'pop%20music', 'football', 'sport']
    // $scope.locationWord = "in%20London";

   
    console.log($scope.musicGenre)
    $scope.getPictures = function(musicGenre){
      // console.log($scope.flickrPhotoInfo  )
      $scope.output = musicGenre
      $scope.flickrPhotos = [];
    $scope.flickrPhotoIds = [];
    $scope.flickrPhotoUrls = [];
      $scope.flickrPhotosx = [];
      // $scope.flickrPhotoInfo = "";

    $scope.url="https://api.flickr.com/services/rest/?&method=flickr.photos.search&text=" + musicGenre + "%20in%20London&sort=recent&format=json&api_key=1c96e35777d1af8b21b80998dfef2216&nojsoncallback=1"

 // console.log($scope.url)

// locationWord
    $http.get($scope.url).success(function(data) {
            // console.log(data)
            var results = data.photos;
            console.log(data)
            console.log("number of photos")
            console.log(results.photo.length)
            console.log(results.pages)
            // console.log(data)
            // console.log(results.photo[0])

      results.photo = shuffle(results.photo)


        for(var i=0; i< 25; i++){
              // console.log(i)
            if(i<25){
            $scope.flickrPhotos.push(results.photo[i])
            $scope.getPhotoSize(results.photo[i].id)
            }
             $scope.flickrPhotoIds.push(results.photo[i].id)
              $scope.getPhotoInfo(results.photo[i].id)
          }
               console.log("number of photos to show")
               console.log($scope.flickrPhotos.length)
          
          // console.log($scope.flickrPhotos)
          // console.log($scope.flickrPhotoIds)
        })

    $scope.getPhotoInfo = function(photoid){
      // console.log(photoid)
        $scope.url2="https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.info where photo_id = "+ photoid +" and api_key=1c96e35777d1af8b21b80998dfef2216&format=json"
        $http.get($scope.url2).success(function(data) {
           var result;
           // console.log("photo info")
           //  console.log(data);
            result_x = data;
            result = data.query.results.photo.owner.location;
            // console.log(result);
            if(!result==""){
              if($scope.flickrPhotoInfo==""){
            $scope.flickrPhotoInfo = result;
          }else {

              $scope.flickrPhotoInfo =  $scope.flickrPhotoInfo + ";" + result;
          }
            // console.log($scope.flickrPhotoInfo)
          }
          })
        }

         $scope.getPhotoSize = function(photoid){
      // console.log(photoid)
        $scope.url2="https://query.yahooapis.com/v1/public/yql?q=select * from flickr.photos.sizes where photo_id = "+ photoid +" and api_key=1c96e35777d1af8b21b80998dfef2216&format=json"
        $http.get($scope.url2).success(function(data) {
           var result;
           // console.log("photo sizes")
            // console.log(data.query.results.size[1]);
            result = data.query.results.size[1].source;
            // console.log(result);


            $scope.flickrPhotoUrls.push(result)
          })
        }
      }
     //    var stuff = "graffiti%20art"
     //    // $scope.getPictures(stuff)
     //    // console.log($scope.musicGenre)
     // setInterval(function()
     //      {$scope.getPictures(stuff)}, 3000);

    $scope.runSlide = function(){
      console.log($scope.musicGenre[0])
      $interval(function(){
            for(var i=0; i<$scope.musicGenre.length; i++){
              $scope.stuff = $scope.musicGenre[i];
              // console.log($scope.stuff)

              $scope.getPictures($scope.stuff);
            }
      }, 5000)
    };
      $scope.runSlide();
  }]);

})();






