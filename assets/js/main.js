const app = angular.module('CurryApp', []);

app.controller('CurryCtrl', function($scope, $interval, $http) {

    const lastCurryLunch = moment('2016-02-24 12:00');
    const nextCurryLunch = moment(lastCurryLunch).add(4, 'months');

    let currentImage = 0;

    $scope.lastCurryLunchDisplay = lastCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDisplay = nextCurryLunch.format("dddd, MMMM Do YYYY");
    $scope.nextCurryLunchDistance = nextCurryLunch.fromNow(true);

    $scope.isCurryTime = moment().isSameOrAfter(nextCurryLunch);

    $http.get('https://api.giphy.com/v1/gifs/search?q=indian+food&api_key=dc6zaTOxFJmzC').then(function(res) {
        let images = res.data.data;
        $scope.image = images[Math.floor(Math.random() * images.length)];
        $interval(function() {
            $scope.image = images[Math.floor(Math.random() * images.length)];
        }, 2 * 1000);
    });
});
