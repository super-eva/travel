angular.module('MyApp', [])
  .controller('controller', ['$scope', '$http', function($scope, $http) {

  	$scope.append = function(){
  		var myEl = angular.element( document.querySelector('#form') );
		myEl.append('<div class=\"form-group\"><label>Y Axis</label>'+
					'<select class=\"form-control\">'+
					   '<option>請選擇</option>'+
					   '<option>流水號</option>'+
					   '<option>村里</option>'+
					   '<option>調查戶數</option>'+
					   '<option>陽性戶數</option>'+
					  '<option>布氏指數</option>'+
					  '<option>布氏級數</option>'+
					   '</select>'+
				  '</div>');
	}
}]);