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
                time: new Date().toLocaleString(),
                completed: false
            });
            $scope.taskName = "";
            $scope.descriptionText = "";
        }         
    }

    $scope.showText = function(completed) {
        return completed ? "Completed (" + new Date().toLocaleString() + ")" : "Didn't complete";
    }

    $scope.setStyle = function(completed) {
        return completed ? "color: green" : "color: red; font-weight: bold";
    }
});
