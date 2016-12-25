var app = angular.module('CurryApp', []);

app.controller('CurryCtrl', function($scope, $interval) {
    var lastCurryLunch = moment('2016-09-23 12:00');
    var nextCurryLunch = moment(lastCurryLunch).add(4, 'months');
    $scope.lastCurryLunchDisplay = lastCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDisplay = nextCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDistance = nextCurryLunch.fromNow(true);
});
