
var tvApp=angular.module("traktTvApp",[]);
tvApp.factory("seriesFactory",["$http", function($http){
	return{
		getSeries: function(){
			return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=968cca12b1a8492036b1e1e05af57e3f');  
	   }
     };
     

}]);