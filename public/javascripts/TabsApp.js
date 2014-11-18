angular.module('TabsApp', [])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
            title: 'Description',
            url: 'one.tpl.html'
        }, {
            title: 'Data',
            url: 'two.tpl.html'

        }];
        $scope.credentials = [{
            "username": "Benno",
            "password": "Benno123"
        }, {
            "username": "Maria",
            "password": "Maria123"
        },{
            "username": "Maria55",
            "password": "Maria123"
        }];

        $scope.master ={};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function (tabUrl) {
            return tabUrl == $scope.currentTab;
        }
    }]);

