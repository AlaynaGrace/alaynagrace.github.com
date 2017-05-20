var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){

  $routeProvider.when('/',{
    templateUrl: 'views/templates/about.html',
    controller: 'AboutController as ac'
  }).when('/code',{
    templateUrl: 'views/templates/code.html',
    controller: 'CodeController as cc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});
