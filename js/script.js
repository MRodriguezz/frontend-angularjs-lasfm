
//********************************************************************************************************************************************
//*************************************************************** LLAMADO DEL API ************************************************************
(function(){
	var appFiltro=angular.module("ControladorFiltros", []);

	appFiltro.filter("Url", function(){
		return function(item){
			return (JSON.stringify(item)).slice(10,-18);
		};
	});

	appFiltro.controller("filtrosCtrl",function($scope,$http){

		$http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=87a5b09be55cddbf22c3552c6ac0068c&format=json").success
		(function(data){

			$scope.informacion=data.tracks.track;
		});
//********************************************************************************************************************************************
//********************************************************* BOTON ORDEN DE LISTA**************************************************************
		$scope.ordenPor = function(orden) {
			$scope.ordenSeleccionado = orden;
		};

	});
})();