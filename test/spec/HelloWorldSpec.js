describe('Test hello world app', function() {

    beforeEach(module('helloWorld'));

    it('should show different message based on route (url)',
      inject(function($compile, $route, $location, $rootScope) {
        // Home page "/" should default to "Hello world"
        var element = $compile("<ng-view></ng-view>")($rootScope);
        $rootScope.$digest();
        expect(element.children().html()).toBe("Hello world!");

        // And here, should "Hello Robert!"
        $location.path('/Robert');
        var element = $compile("<ng-view></ng-view>")($rootScope);
        $rootScope.$digest();
        expect(element.children().html()).toBe("Hello Robert!");
    })); 

    it('should add an alert to the stack',
      inject(function($rootScope, $controller) {
          var scope = $rootScope.$new();
          var ctrl = $controller("AlertCtrl", {$scope: scope });
          expect(scope.alerts.length).toBe(0);

          scope.addAlert();
          expect(scope.alerts.length).toBe(1);
      }));
});





