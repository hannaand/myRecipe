// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myRecipe = angular.module('myRecipe', ['ionic', 'firebase']);

myRecipe.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

myRecipe.config(function($stateProvider,$urlRouterProvider) {
  
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "home.html"
  });
  $stateProvider.state("recList", {
    url: "/recList",
    templateUrl: "recList.html",
    controller: "listController"
  });
  $stateProvider.state("singleRecipe", {
    url: "/:id",
    templateUrl: "singleRec.html",
    controller: "recipeController"
  });
  $stateProvider.state("add", {
    url: "/add",
    templateUrl: "add.html",
    controller: "addController"
  });
  $stateProvider.state("delete", {
    url: "/delete",
    templateUrl: "delete.html",
    controller: "deleteController"
  });
  $stateProvider.state("edit", {
    url: "/edit",
    templateUrl: "edit.html",
    controller: "recipeEditController"
  });
  $stateProvider.state("one", {
    url: "/edit/:id",
    templateUrl: "editOne.html",
    controller: "recipeEditController"
  });

  $urlRouterProvider.otherwise("/");
  
});