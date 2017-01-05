var app = angular.module('CurryApp', []);

app.controller('CurryCtrl', function($scope, $interval, $http) {
    var lastCurryLunch = moment('2016-09-23 12:00');
    var nextCurryLunch = moment(lastCurryLunch).add(4, 'months');
    var currentImage = 0;
    $scope.lastCurryLunchDisplay = lastCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDisplay = nextCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDistance = nextCurryLunch.fromNow(true);

    $http.get('https://api.giphy.com/v1/gifs/search?q=indian+food&api_key=dc6zaTOxFJmzC').then(function(res) {
        var images = res.data.data;
        $scope.image = images[Math.floor(Math.random() * images.length)];
        $interval(function() {
            $scope.image = images[Math.floor(Math.random() * images.length)];
        }, 4 * 1000);
    });
});
