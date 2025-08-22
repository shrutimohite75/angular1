//Define Angular Js app
var app = angular.module("studentApp",[]);

//Desine Controller
app.controller("StudentController", function ($scope) {
    $scope.student ={
        name:"John Doe",
        roll:"27",
        course: "cse"
    };
});