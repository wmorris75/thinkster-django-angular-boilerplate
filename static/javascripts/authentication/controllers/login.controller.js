/**
 * Created by wayne on 2/13/17.
 */
//Login Controller
(function (){
    angular
        .module('thinkster.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    /*
    * @namespace LoginController
     */
    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login = login;

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf thinkster.authentication.controllers.LoginController
         */
        function activate() {
            if (Authentication.isAuthenticated()) {
                //if user is authenticated, they should not be here
                $location.url('/')
            }
        }

        /**
         * @name login
         * @desc Log the user in
         * @memberOf thinkster.authentication.controllers.LoginController
         */
        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }
})();