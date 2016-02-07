var searchApp = angular.module('searchApp',[]);
searchApp.controller('search',function($scope,$filter){
$scope.searchText=this.searchText;

     $scope.$watch('searchText', function(newVal, oldVal) {
     
      $scope.filteredArray = $filter('filter')($scope.pin, newVal);
    });
    
    
       $scope.exportData = function () {
      console.log([$scope.filteredArray]);     
    alasql('SELECT * INTO XLSX("frnds.xlsx",{headers:true}) FROM ?',[$scope.filteredArray]);
    };

$scope.pin=[{ name: 'saiabhi', clas: 'animator', marks: 10 },
    { name: 'praneeth', clas: 'electronical engineer', marks: 10 },
    { name: 'Siddharth', clas: 'hacker', marks: 12 },
    { name: 'vikas', clas: 'hotel management', marks: 100 },
    {name:'mouli',clas:'heroine',marks:1000},
    {name:'nikil',clas:'rockstar',marks: 250}];

});
