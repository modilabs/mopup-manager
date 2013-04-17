var myapp = angular.module('mopup', ['ui.bootstrap']);

myapp.factory('paired_list', function(FacilitiesListCtrl, NMISListCtrl){
});
myapp.factory('failed_list', function(FacilitiesListCtrl, NMISListCtrl){
});

var TabsCtrl = function ($scope) {
  $scope.panes = [
    { title: "Health Facilities", 
      content: "Health Facilities will be here", 
      active: true},
    { title: "Education Facilities", 
      content: "Education Facilities will be here"}
  ];
};



var FacilitiesListCtrl = function($scope, $http) {
  var file = "docs/Aba_North_Health_Facility_List.csv";
  $http.get(file)
    .success(function(data, status, headers, config){
      $scope.facilities = csv(data).toObjects();
//_.each($scope.facilities, function(item, i){item.index=i});
      $scope.index = 0;
      $scope.facility = $scope.facilities[$scope.index];
      
      $scope._changeI = function(delta){
        var newI = $scope.index + delta;
        if(newI >= $scope.facilities.length) {
          newI = 0;
        } else if(newI <= 0) {
          newI = $scope.facilities.length - 1;
        }
        $scope.index = newI;
        $scope.facility = $scope.facilities[newI];
      };
      $scope.next = function(){
        $scope._changeI(1);
      };
      $scope.previous = function(){
        $scope._changeI(-1);
      };
    })
    .error(function(data, status, headers, config){
      alert(csv_addr + " is not valid file format, please check!");
    });

};
  

var NMISListCtrl = function($scope, $http) {
  var file = "docs/Aba_North_NMIS_List.csv";
  $http.get(file)
    .success(function(data, status, headers, config){
      $scope.facilities = csv(data).toObjects();
      var facilities_len = $scope.facilities.length;
      $scope.predicate = 'facility_name';
      $scope.radioModel = 'Name';
      $scope.sortby = function(key) {
        $scope.facilities = _.sortBy($scope.facilities, 
                function(fac){ return fac[key].toLowerCase();});
      };
    })
    .error(function(data, status, headers, config){
      alert(file + " is not valid file format, please check!");
    });
};

var PairdListCtrol = function($scope) {
};

