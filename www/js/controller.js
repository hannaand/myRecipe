angular.module('myRecipe')

.controller('addController', function($scope,$firebaseArray,$state,recipeService){
	$scope.submitRecipe = function(){
		$scope.newRec = recipeService.all;
		$scope.newRec.$add({
			recipeName: $scope.recName,
			recipeIngredients: $scope.recIngredients,
			recipeDirections: $scope.recDirections
		});
		$state.go('home');
	};

})

.controller('listController', function($scope, recipeService){
	$scope.recipes = recipeService.all;
})

.controller('recipeController', function($scope, recipeService, $stateParams, $state){
	$scope.singleRecipe = recipeService.get($stateParams.id);
	$scope.ingList = $scope.singleRecipe.recipeIngredients.split(';');
	$scope.prepList = $scope.singleRecipe.recipeDirections.split(';');
});