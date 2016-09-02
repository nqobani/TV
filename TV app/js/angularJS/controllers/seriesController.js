angular.module('traktTvApp').controller('seriesCtrl',['seriesFactory', function(seriesFactory){

	var sc=this;

	sc.getPopularSeries=function(){
		var promise=seriesFactory.getSeries();
		promise.then(
			function(payLoad){

				sc.movies=payLoad.data.results;
				console.log(payLoad.data.results);
			},
			function(errorPayLoad)
			{
				console.log(payLoad+"error");
			})
		.catch(function(promise) {
            
        });
	}

}]);