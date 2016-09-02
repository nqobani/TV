/*var tvApp=angular.module("traktTvApp");
tvApp.factory("seriesImgFactory",["$http", function($http){


return{
      getSeriesImgs:function(imdb){
        return $http({
          url: 'https://api.trakt.tv/search/imdb/' + imdb + '?extended=images',
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'trakt-api-version': '2',
              'trakt-api-key': '468a92c26d3411be7886881b7f40afea47288963a91d9c5a0f43257521ceab74'
          }       
        });  
     }
   };


   }]);*/