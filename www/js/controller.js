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

	$scope.searchText = '';
    $scope.setSearchText = function(n) {
        $scope.searchText = n;
    }
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
			destructiveText: 'Ta bort',
			titleText: 'Är du säker på att du vill ta bort receptet?',
			cancelText: 'Avsluta',
			destructiveButtonClicked: function(){
				var rem = $scope.recs.$getRecord(id);
				$scope.recs.$remove(rem);
				return true;
			}
		});
	};
})

.controller('editController', function($scope, recipeService){
	$scope.editRecipes = recipeService.all;
	
})

.controller('recipeEditController', function($scope,recipeService, $stateParams, $state){
	$scope.allRecs = recipeService.all;
	$scope.singleRecipe = recipeService.get($stateParams.id);
	$scope.title = $scope.singleRecipe.recipeName;
	$scope.ingredients = $scope.singleRecipe.recipeIngredients;
	$scope.directions = $scope.singleRecipe.recipeDirections;
	$scope.myid = $scope.singleRecipe.$id;
	$scope.updateRecipe = function(id) {
		var ed = $scope.allRecs.$getRecord(id);
		ed.recipeName = $scope.title;
		ed.recipeIngredients = $scope.ingredients;
		ed. recipeDirections = $scope.directions;
		$scope.allRecs.$save(ed);
		$state.go('edit');
	};
});