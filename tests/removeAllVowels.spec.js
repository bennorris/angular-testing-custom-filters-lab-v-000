describe('Vowel Remover', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
				$filter = $injector.get('$filter');
    }));

    it('shld rmv vwls', function () {
				var results = $filter('removeAllVowels')('banana');
				expect(results).toBe('bnn');
    });
});
