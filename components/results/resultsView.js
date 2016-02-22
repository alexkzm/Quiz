'use strict';

app.controller('countCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, firebaseRoot){
	
	var auth = $firebaseAuth(new Firebase(firebaseRoot));

//Google
	$scope.login = function (user) {
		auth.$authWithOAuthPopup("google").then(function(abc){
			var uid = abc.uid;
			var serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid));
			serverUser.email = user.email;
			serverUser.$save();
		}, functon (err) {
			condole.log('err', err);
		});

//GitHub
	$scope.login = function (user) {
		auth.$authWithOAuthPopup("google").then(function(abc){
			var uid = abc.uid;
			var serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid));
			serverUser.email = user.email;
			serverUser.$save();
		}, functon (err) {
			condole.log('err', err);
		});

//Facebook
	$scope.login = function (user) {
		auth.$authWithOAuthPopup("google").then(function(abc){
			var uid = abc.uid;
			var serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid));
			serverUser.email = user.email;
			serverUser.$save();
		}, functon (err) {
			condole.log('err', err);
		});
//Twitter
	$scope.login = function (user) {
		auth.$authWithOAuthPopup("google").then(function(abc){
			var uid = abc.uid;
			var serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid));
			serverUser.email = user.email;
			serverUser.$save();
		}, functon (err) {
			condole.log('err', err);
		});

//Continue as a Guest

});

