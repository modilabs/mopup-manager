angular.module('plunker', ['ui.bootstrap']);
var TabsDemoCtrl = function ($scope) {
  $scope.panes = [
    { title: "Health Facilities", 
      content: "Health Facilities will be here", 
      active: true},
    { title: "Education Facilities", 
      content: "Education Facilities will be here"}
  ];
};

function populate_list(csv_addr, $scope, $http) {
  $http.get(csv_addr)
    .success(function(data){
      $scope.facilities = csv(data).toObjects();
      $scope.predicate = 'facility_name';
      $scope.radioModel = 'Name';
      $scope.sortby = function(key) {
        $scope.facilities = _.sortBy($scope.facilities, 
                function(fac){ return fac[key].toLowerCase();});
      };
    })
    .fail(function(err){
      alert(err);
    });

}

function  FaciltiesListCtrl($scope, $http) {
  var file = "csvs/Aba_North_Health_Facility_List";
  populate_list(file, $scope, $http);
}
  

var NMISListCtrl = function($scope, $http) {
  var file = "csvs/Aba_North_NMIS_List";
  populate_list(file, $scope, $http);
};
