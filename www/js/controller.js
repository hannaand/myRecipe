//add controller
myRecipe.controller('addController', function($scope,$firebaseArray,$state,recipeService){
	$scope.submitRecipe = function(){
		$scope.newRec = recipeService.all;
		$scope.newRec.$add({
			recipeName: $scope.recName,
			recipeIngredients: $scope.recIngredients,
			recipeDirections: $scope.recDirections
		});
		$state.go('home');
	};

});