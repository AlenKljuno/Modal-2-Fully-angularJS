var app = angular.module('app',[]);
app.controller('controller', function($scope){
    $scope.normalan = '';
$scope.uvecaj = function(){
if($scope.normalan === 'full-screen'){
    $scope.normalan = '';
    console.log('klikno si da smanjis');
} else{
    $scope.normalan = 'full-screen'
    console.log('klikno si da uvecas')
}
}
$scope.smanji = function(){
    
    if($scope.normalan === 'full-screen' || $scope.normalan === ''){
        console.log('Klikno si da minimiziras')
        $scope.normalan = 'min-screen';
    } 
}

});