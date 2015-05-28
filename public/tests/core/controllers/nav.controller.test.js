'use strict';

require('../../../app');

var objectToTest = 'NavCtrl';

describe(objectToTest, function () {
    var scope, createController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('core'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller(objectToTest, {
                '$scope': scope
            });
        };
        createController();
    }));

    it('PartialTest is correct', function() {
        expect(scope.PartialTest).toBe("Modify me in Core Module's Nav Controller");
    });

    it('topBar is defined', function() {
        expect(scope.topBar).toBeDefined();
    });

    it('topBarItems is defined', function() {
        expect(scope.topBarItems).toBeDefined();
    });
});