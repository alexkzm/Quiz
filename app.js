'use strict'

angular.module('quizApp', ['ui.router'])

.config(($urlRouterProvider, $stateProvider) => {

	$stateProvider
			.state('list', {
				//http://
				url: '/list',
				controller:'listController',
				templateUrl: 'list-tmpl.html'
				resolve: {
					bfastFood: (breakfast) => {
						return breakfast.getFoods()
					}
				}
			})
			.state('details', {
				//http://
				url: '/details/:foodId',
				controller:'detailsController',
				templateUrl: 'details-tmpl.html'
			})
})
