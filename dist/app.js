function reverseString(str) {
  return str.split("").reverse().join("");
}

const app = angular.module("react-into-ng-app", ["react"]);

app.directive("chatter", reactDirective =>
  reactDirective(Chatter.default, ["topic"])
);

app.controller("main-controller", function($scope) {
  $scope.docs = [
    { id: 0, name: "first" },
    { id: 1, name: "second" },
    { id: 2, name: "third" }
  ];

  $scope.selectedDocID = null;
  $scope.isChatterOpen = false;

  $scope.isDocSelected = function(doc) {
    return $scope.selectedDocID === doc.id;
  };

  $scope.toggleDocSelection = function(doc) {
    $scope.isChatterOpen = false;

    if ($scope.selectedDocID == doc.id) {
      $scope.selectedDocID = null;
    } else {
      $scope.selectedDocID = doc.id;
    }
  };

  $scope.toggleDiscussion = function() {
    $scope.isChatterOpen = !$scope.isChatterOpen;
  };
});
