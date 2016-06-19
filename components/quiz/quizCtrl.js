'use strict'

app.controller('countCtrl', ($scope, $firebaseObject, $firebaseArray, $firebaseAuth, firebaseRoot) => {
	
	let auth = $firebaseAuth(new Firebase(firebaseRoot))

//Google
	$scope.login = (user) => {
		auth.$authWithOAuthPopup("google").then((abc) => {
			let uid = abc.uid
			let serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid))
			serverUser.email = user.email
			serverUser.$save()
		}, (err) => {
			condole.log('err', err)
		})

//GitHub
	$scope.login = (user) => {
		auth.$authWithOAuthPopup("github").then((abc) => {
			let uid = abc.uid
			let serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid))
			serverUser.email = user.email
			serverUser.$save()
		}, (err) => {
			condole.log('err', err)
		})

//Facebook
	$scope.login = (user) => {
		auth.$authWithOAuthPopup("facebook").then((abc) => {
			let uid = abc.uid
			let serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid))
			serverUser.email = user.email
			serverUser.$save()
		}, (err) => {
			condole.log('err', err)
		})

//Twitter
	$scope.login = (user) => {
		auth.$authWithOAuthPopup("twitter").then((abc) => {
			let uid = abc.uid
			var serverUser = $firebaseObject(new Firebase(firebaseRoot + '/users/' + uid))
			serverUser.email = user.email
			serverUser.$save()
		}, (err) => {
			condole.log('err', err)
		})

//Continue as a Guest

})

