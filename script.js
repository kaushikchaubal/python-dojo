var app = angular.module('dojoApp', ['firebase', 'ngRoute'])

app.controller('MainCtrl', function($scope, $firebase) {

    $scope.firstPlus = function() {
        $scope.dojo.team1 = parseInt($scope.dojo.team1) + 1;
    };

    $scope.firstMinus = function() {
        $scope.dojo.team1 = parseInt($scope.dojo.team1) - 1;
    };

    $scope.secondPlus = function() {
        $scope.dojo.team2 = parseInt($scope.dojo.team2) + 1;
    };

    $scope.secondMinus = function() {
        $scope.dojo.team2 = parseInt($scope.dojo.team2) - 1;
    };

    $scope.thirdPlus = function() {
        $scope.dojo.team3 = parseInt($scope.dojo.team3) + 1;
    };

    $scope.thirdMinus = function() {
        $scope.dojo.team3 = parseInt($scope.dojo.team3) - 1;
    };

    $scope.forthPlus = function() {
        $scope.dojo.team4 = parseInt($scope.dojo.team4) + 1;
    };

    $scope.forthMinus = function() {
        $scope.dojo.team4 = parseInt($scope.dojo.team4) - 1;
    };

    $scope.fifthPlus = function() {
        $scope.dojo.team5 = parseInt($scope.dojo.team5) + 1;
    };

    $scope.fifthMinus = function() {
        $scope.dojo.team5 = parseInt($scope.dojo.team5) - 1;
    };

    $scope.sixthPlus = function() {
        $scope.dojo.team6 = parseInt($scope.dojo.team6) + 1;
    };

    $scope.sixthMinus = function() {
        $scope.dojo.team6 = parseInt($scope.dojo.team6) - 1;
    };

    $scope.seventhPlus = function() {
        $scope.dojo.team7 = parseInt($scope.dojo.team7) + 1;
    };

    $scope.seventhMinus = function() {
        $scope.dojo.team7 = parseInt($scope.dojo.team7) - 1;
    };

    $scope.eighthPlus = function() {
        $scope.dojo.team8 = parseInt($scope.dojo.team8) + 1;
    };

    $scope.eighthMinus = function() {
        $scope.dojo.team8 = parseInt($scope.dojo.team8) - 1;
    };



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

        $scope.flatten = function(answer) {
            if (answer == '[1,2,3,4,5,6,7,8]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.largestprime = function(answer) {
            if (answer == 6857) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.evenfibonacci = function(answer) {
            if (answer == 4613732) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.multiples = function(answer) {
            if (answer == 233168) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.oddword = function(answer) {
            if (answer == 'what,si,the;gninaem,of:efil.') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.heronian = function(answer) {
            if (answer == 517) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.largestpalindrome = function(answer) {
            if (answer == 906609) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.smallestmultiple = function(answer) {
            if (answer == 232792560) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.reversewords = function(answer) {
            if (answer == 'Bub! you, Hey') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.pi = function(answer) {
            if (answer == 3.14285714286) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.zigzag = function(answer) {
            if (answer == '[24, 42, 60, 78, 96]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.harshad = function(answer) {
            if (answer == '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.zeckendorf = function(answer) {
            if (answer == 101010) {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.fibonacci = function(answer) {
            if (answer == '[1, 1, 2, 4, 8, 16, 32, 64, 127, 253, 504, 1004, 2000, 3984, 7936]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.pernicious = function(answer) {
            if (answer == '[3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 31, 33, 34, 35, 36]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.caeser = function(answer) {
            if (answer == 'Esp bftnv mczhy qzi ufxapo zgpc esp wlkj ozrd') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.subsequenctial = function(answer) {
            if (answer == '[3, 5, 6, -2, -1, 4]') {
                alert('Well done')
            } else {
                alert('Wrong answer. Try again')
            }
        };

        $scope.nonsquares = function(answer) {
            if (answer == '[2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27]') {
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