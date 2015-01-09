var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'monospaced.mousewheel']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/education', {
            templateUrl: 'views/education.html'
        })
        .when('/experience', {
            templateUrl: 'views/experience.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        });
});

myApp.controller('pageStatusController', function ($scope, $rootScope, $location, $timeout) {

    $scope.pageStatus = {
        transparentHeader: true,
        current: 0,
        locationArray: ['/', '/about', '/education', '/experience', '/contact' ],
        animationClass: true // change the ng-enter/ng-leave animation (up = true or down = false)
    };

    $scope.changeTransparentHeader = function () {
        if ($location.path() === '/') {
            $scope.pageStatus.transparentHeader = true;
        } else {
            $scope.pageStatus.transparentHeader = false;
        }
    };

    $scope.showNextPage = function () {

        $scope.pageStatus.current += 1;
        $location.path($scope.pageStatus.locationArray[$scope.pageStatus.current]);
        $scope.pageStatus.animationClass = true;
    };

    $scope.showPreviousPage = function () {

        $scope.pageStatus.current -= 1;
        $location.path($scope.pageStatus.locationArray[$scope.pageStatus.current]);
        $scope.pageStatus.animationClass = false;
    };

    $scope.showPage = function (pathNumber) {

        $scope.pageStatus.current = pathNumber;
        $location.path($scope.pageStatus.locationArray[pathNumber]);
        $scope.pageStatus.animationClass = true;
        $scope.changeTransparentHeader();
    };

    $scope.toggleByMouseWheel = function (event, delta) {

        if (delta > 0) {
            if ($scope.pageStatus.current > 0) {
                $scope.showPreviousPage();
            }
        } else {
            if ($scope.pageStatus.current < ($scope.pageStatus.locationArray.length - 1)) {
                $scope.showNextPage();
            }
        }

        $scope.changeTransparentHeader();
        event.preventDefault();
    };

    $scope.toggleByArrow = function ($event) {

        if ($event.keyCode === 38) {
            if ($scope.pageStatus.current > 0) {
                $scope.showPreviousPage();
            }
        }

        if ($event.keyCode === 40) {
            if ($scope.pageStatus.current < ($scope.pageStatus.locationArray.length - 1)) {
                $scope.showNextPage();
            }
        }
        
        $scope.changeTransparentHeader();
    };

    $rootScope.$on("$routeChangeSuccess", function () {
        $timeout(function () { window.scrollTo(0, 0); }, 900);
    });

});

