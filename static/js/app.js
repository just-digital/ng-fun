var app = angular.module('helloWorld', ["ui.bootstrap"]);

// Handles routing 
app.config(function($routeProvider) {
    $routeProvider.when("/:name", { 
        controller: "HelloCtrl",
        //templateUrl:"nice.html"
        template:"<h1>Hello {{ model.name }}!</h1>"
    })
    .otherwise({redirectTo: "/"})  // catches the first "/" and redirects to "/#/"
});

// Controller used to generate our hello message
app.controller("HelloCtrl", function($scope, $routeParams){
    if (!$routeParams.name) {
        $routeParams.name = "world";
    }
    $scope.model = {"name": $routeParams.name};
});

// Controller used to push messages to the view
app.controller("AlertCtrl", function($scope) {
    $scope.alerts = [];
    $scope.addAlert = function() {
        $scope.alerts.push({msg: "You're Hired!", type:"success"});
    };
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

