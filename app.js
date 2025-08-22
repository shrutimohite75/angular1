// Create Andular JS Module
var app = angular.module("studentApp",[]);

// create a custom dirctive
app.directive("studentCard",function(){
    return{
        restrict: "E", //E = element (use<student-card>)
        template:`
        <div style="border:1px solid #333; padding:20px; width:250px; 
        margin:10px; border-radius:10px;background-color:grey;">
             <h3>{{student.name}}</h3>
             <p><b>Roll No:</b> {{student.roll}}</p>
             <p><b>Course:</b> {{student.course}}</p>
            </div>
            `,
            controller : function($scope) {
                //student object 
                $scope.student = {
                    name: "Shruti Mohite",
                    roll: "3027",
                    course: "cse"
                };
            }
    };
});