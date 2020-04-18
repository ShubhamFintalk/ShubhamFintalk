var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl :'view/Sign_up.htm'

    })
    .when('/login', {
        templateUrl :'view/login.htm'

   })
            .otherwise({
                redirectTo:'view/Sign_up.htm'
            });
});


