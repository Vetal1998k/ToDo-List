var model = {
    user: "Vitalii Koziuberdin",
    points:[]
};

var toDoList = angular.module("toDoList", []);

toDoList.controller("ToDoListCtrl", function($scope) {
    $scope.list = model;

    $scope.addTask = function() { 
        if (angular.isDefined($scope.taskName) &&
        angular.isDefined($scope.descriptionText)) {
            $scope.list.points.push({
                name: $scope.taskName,
                description: $scope.descriptionText,
                completed: false
            });
            $scope.taskName = "";
            $scope.descriptionText = "";
        }         
    }

    $scope.showText = function(completed) {
        return completed ? "Completed" : "Didn't complete";
    }

    $scope.setStyle = function(completed) {
        return completed ? "color: green" : "color: red; font-weight: bold";
    }
});
