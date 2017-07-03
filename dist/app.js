function reverseString(str) {
  return str.split("").reverse().join("");
}

const app = angular.module("react-into-ng-app", ["react"]);

app.directive("discussions", reactDirective =>
  reactDirective(Discussions.default, ["doc"])
);

const defaultDB = {
  users: [
    { id: 0, name: "Admin" },
    { id: 1, name: "NoName" },
    { id: 2, name: "Kana" }
  ],
  docs: [
    { id: 0, name: "The first document" },
    { id: 1, name: "The second document" },
    { id: 2, name: "The third document" }
  ],
  messages: [
    { id: 0, docID: 0, authorID: 0, text: "Hello" },
    { id: 1, docID: 0, authorID: 1, text: "World" },
    { id: 1, docID: 1, authorID: 2, text: "!!!" }
  ]
};

function fetchDB() {
  const db = JSON.parse(localStorage.getItem("db")) || defaultDB;
  localStorage.setItem("db", JSON.stringify(db));

  return db;
}

app.controller("main-controller", function($scope) {
  $scope.docs = fetchDB().docs;

  $scope.selectedDocID = null;
  $scope.areDiscussionsShown = false;

  $scope.isDocSelected = function(doc) {
    return $scope.selectedDocID === doc.id;
  };

  $scope.toggleDocSelection = function(doc) {
    $scope.areDiscussionsShown = false;

    if ($scope.selectedDocID == doc.id) {
      $scope.selectedDocID = null;
    } else {
      $scope.selectedDocID = doc.id;
    }
  };

  $scope.toggleDiscussion = function() {
    $scope.areDiscussionsShown = !$scope.areDiscussionsShown;
  };
});
