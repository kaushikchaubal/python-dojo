
var app = angular.module('dojoApp', ["firebase"])

app.controller('MainCtrl', function ($scope, $firebase) {
	
	var ref = new Firebase("https://python-dojo.firebaseio.com");
	var sync = $firebase(ref);
	var syncObject = sync.$asObject();
	syncObject.$bindTo($scope, "dojo");

});
