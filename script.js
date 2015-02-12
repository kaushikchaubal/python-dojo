var app = angular.module('dojoApp', ['firebase', 'ngRoute'])

app.controller('MainCtrl', function($scope, $firebase) {

    var ref = new Firebase("https://python-dojo.firebaseio.com");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "dojo");

});



app.controller('QuestionsCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(locationName) {

            $location.hash(locationName);
            $anchorScroll();
        };

        $scope.gcd = function(answer) {
            if (answer == 34) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.hailstone = function(answer) {
            if (answer == 112) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

    }
]);

app.config(function($routeProvider) {
    $routeProvider
    // ----------- Landing Page -----------
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/questions', {
            templateUrl: 'views/questions.html',
            controller: 'QuestionsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});