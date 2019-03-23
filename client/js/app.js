/* register the modules the application depends upon here*/
// angular.module('listings', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('harnApp', ['ngAnimate', 'ngRoute' , 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');

        // Classical routes naming
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/landing.view.html',
                controller: 'LandingController'
            })
            .state('ar', {
                url: '/ar',
                templateUrl: 'views/ar.scene.view.html',
                controller: 'ArController'
            })
            .state('vr', {
                url: '/vr',
                templateUrl: 'views/vr.scene.view.html'
            })

    })