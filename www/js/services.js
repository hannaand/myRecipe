angular.module('recipeService', [])

.factory('recipeService',function($firebaseArray) {
	var fb = new Firebase('https://my-recipeapp.firebaseio.com/');
	var recs = $firebaseArray(fb);
	var recipeService = {
		all: recs,
		get: function(recId) {
			return recs.$getRecord(recId);
		}
	};
	return recipeService;
});