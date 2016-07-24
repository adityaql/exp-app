(function() {
    var app = angular.module('sp',['ui.router']);
    app.controller('mainC',['$state',mainC]);
    function mainC($state) {
        var self = this;
        self.name = 'Queue';
        self.gotoMain = function() {
            $state.go('main');
        }
    }
    app.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main',{
                url: '/main',
                templateUrl: 'main',
                controller: mainC
            })
            .state('queue',{
                url: '/queue',
                templateUrl: 'queue'
            })
            .state('homepage',{
                url: '/homepage',
                templateUrl: 'homepage'
            })
    })
})();
