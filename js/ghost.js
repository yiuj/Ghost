var app = angular.module('MyApp',[]);

app.controller('AppCtrl', function($scope) {
    $scope.word = "";
    $scope.nextChar = ""

    $scope.updateWord = function() {
        $scope.word = $scope.word + $scope.nextChar;
        $scope.nextChar = "";
    }


});


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/