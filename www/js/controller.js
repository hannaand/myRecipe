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
})

.controller('deleteController', function($scope, recipeService, $state, $ionicActionSheet){
	$scope.recs = recipeService.all;

	$scope.showDetails = function(id) {
		$ionicActionSheet.show({
			destruktiveText: 'Delete',
			titleText: 'Sure you want to delete?',
			cancelText: 'Cancel',
			destruktiveButtonClicked: function(){
				var rem = $scope.recs.$getRecord(id);
				$scope.recs.$remove(rem);
				return true;
			}
		});
	};
})

.controller('editController', function($scope, recipeService, $stateParams, $state){
	$scope.allRecs = recipeService.all;
	$scope.singleRecipe = recipeService.get($stateParams.id);
	$scope.title = $scope.singleRecipe.recipeName;
	$scope.ingredients = $scope.singleRecipe.recipeIngredients;
	$scope.directions = $scope.singleRecipe.recipeDirections;
	$scope.myid = $scope.singleRecipe.$id;
	$scope.updateRecipe = function(id) {
		var ed = $scope.allRecs.$getRecord(id);
		ed.recipeName = $scope.title;
		ed.recipeIngredients = $scope.Ingredients;
		ed. recipeDirections = $scope.Directions;
		$scope.allRecs.$save(ed);
		$state.go('edit');
	};
})