'use strict';

angular.module('core').controller('NavCtrl', ['$scope', 'Menus', '$translate', function($scope, Menus, $translate){
    $scope.PartialTest = "Modify me in Core Module's Nav Controller";

    $scope.localMenu = Menus.getMenu('locales');
    $scope.localeMenuItems = $scope.localMenu.items;

    $scope.topBarMenu = Menus.getMenu('topBar');
    $scope.topBarMenuItems = $scope.topBarMenu.items;

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}]);