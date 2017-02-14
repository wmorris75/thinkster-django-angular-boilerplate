/**
 * Created by wayne on 2/13/17.
 */
(function (){
    angular
        .module('thinkster.config')
        .config(config)

    config.$inject = ['$locationProvider'];

    //Enable HTML Routing
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!')
    }
})();