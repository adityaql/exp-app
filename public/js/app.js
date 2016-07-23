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

        $stateProvider
            .state('main',{
                url: '/main',
                templateUrl: 'views/main.ejs',
                controller: mainC
            })
            .state('queue',{
                url: '/queue',
                templateUrl: 'queue'
            })
    })
})();
