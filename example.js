angular.module('plunker', ['ui.bootstrap']);
var TabsDemoCtrl = function ($scope) {
  $scope.panes = [
    { title: "Health Facilities", content: "Health Facilities will be here", active: true},
    { title: "Education Facilities", content: "Education Facilities will be here"}
  ];
};

var FaciltiesListCtrl = function ($scope) {
  $scope.facilities = [
  ];
};
