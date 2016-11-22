describe('Favorite Food', function () {
    var $controller;

    beforeEach(module('app'));

		beforeEach(inject(function ($injector) {
				$filter = $injector.get('$filter');
		}));

    it('should return favorite foods', function () {
				var folk = [
					{ name: 'A',
						favoriteFood: 'apple'
					},{
						name: 'B',
						favoriteFood: 'beets'
					}
				]

				var results = $filter('favoriteFood')(folk, 'beets');

				expect(results[0].name).toBe('B');

    });
});
