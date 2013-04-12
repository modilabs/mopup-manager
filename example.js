angular.module('plunker', ['ui.bootstrap']);
var TabsDemoCtrl = function ($scope) {
  $scope.panes = [
    { title: "Health Facilities", content: "Health Facilities will be here", active: true},
    { title: "Education Facilities", content: "Education Facilities will be here"}
  ];
};

function  FaciltiesListCtrl($scope) {
  $scope.facilities = [
    { 'facility_name' : 'Uratta Health Centre', 'sector':'health',
        'state' : 'abia', 'lga': 'aba_north',
        'ward': 'Uratta', 'community': 'Umughbuji',
        'facility_type': 'primaryhealthcarecentre'
    }, { 'facility_name' : 'Asaokpuaja Health Centre', 'sector':'education',
        'facility_type' : 'healthpostdispensary',
        'state' : 'abia', 'lga': 'aba_north',
        'ward': 'Asaokpuaja', 'community': 'Asaokpuaja'
    }
  ];
  $scope.predicate = 'facility_name';
  $scope.radioModel = 'Name';
  $scope.sortby = function(key) {
    $scope.facilities = _.sortBy($scope.facilities, 
            function(fac){ return fac[key];});
  };
};

var NMISListCtrl = function ($scope) {
  $scope.facilities = [
  { 'facility_name' : 'Asa Okpulor Health Centre',
    'state' : 'abia',
    'lga': 'aba_north',
    'ward': 'Uratta',
    'community': 'Uratta',
    'facility_type': 'primaryhealthcarecentre'
  }, {
    'facility_name' : 'Asa Ukonu Health Centre',
    'facility_type' : 'primaryhealthcarecentre',
    'state' : 'abia',
    'lga': 'aba_north',
    'ward': 'Asa',
    'community': 'Asa',
  }
  ];
};
