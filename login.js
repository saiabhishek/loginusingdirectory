var login = angular.module('login',['ngRoute']);

login.config(function($routeProvider){
    $routeProvider
    .when('/first',{
        templateUrl:'login.html',
       controller:'register'
        
    })
    .when('/second',{
        
        templateUrl:'register.html',
        controller:'register'
        
    })
    
    
});

login.controller('register',['$scope',function($scope){
        
$scope.reg=[{ emailid: 'abhi@gmail.com', password: '1234'},{ emailid: 'sai@gmail.com', password: '03214'}];
    console.log([$scope.reg]);
$scope.registe=function()
            {
                $scope.reg.push({emailid: $scope.emailid1,
                password: $scope.password1});
                
                $scope.emailid1="";
                $scope.password1="";
                
                }
$scope.reg2=[$scope.reg];
console.log([$scope.reg]);
$scope.emailid3="";
$scope.password3="";

   $scope.tabel=function()
            {
       angular.forEach($scope.reg2,function(value){
    
                if(value.emailid== $scope.emailid3 && value.password ==$scope.password3)
                        {
                location.href = 'tabel/tabel1.html';
                        }
                else
                        {
                         console.log('fail');
                        }   
           });
}}]);
