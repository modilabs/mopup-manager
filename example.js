angular.module('plunker', ['ui.bootstrap']);
var TabsDemoCtrl = function ($scope) {
  $scope.panes = [
    { title: "Health Facilities", content: "Health Facilities will be here", active: true},
    { title: "Education Facilities", content: "Education Facilities will be here"}
  ];
};

var FaciltiesListCtrl = function ($scope) {
  $scope.facilities = [
  { 'facility_name' : 'Uratta Health Centre',
    'state' : 'abia',
    'lga': 'aba_north',
    'ward': 'Uratta',
    'community': 'Umughbuji',
    'facility_type': 'primaryhealthcarecentre'
  }, {
    'facility_name' : 'Asaokpuaja Health Centre',
    'facility_type' : 'healthpostdispensary',
    'state' : 'abia',
    'lga': 'aba_north',
    'ward': 'Asaokpuaja',
    'community': 'Asaokpuaja',
  }
  ];
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
