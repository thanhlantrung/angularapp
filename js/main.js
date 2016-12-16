var app = angular.module('myApp', [
	'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
//Home
.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
//Pages
.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
.when("/blog", {templateUrl: "partials/blog.html", controller: "pageCtrl"})
.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
.when("/chess", {templateUrl: "partials/chess.html", controller: "pageCtrl"})

//else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function(/* $scope, $location, $http */) {
	console.log("hello page controller");

});