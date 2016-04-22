var NotesApp = angular.module('NotesApp', [
   // Angular modules
   'ngRoute',  
   // 3rd Party Modules
   'ui.bootstrap'
   // Custom modules
]);

NotesApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
    // route for the Start page
    .when('/', {
        templateUrl: '/Scripts/Views/DashboardView.html',
        controller: 'DashboardViewModel',
        controllerAs: 'DashboardVM'
    })
    .when('/Dashboard', {
        templateUrl: '/Scripts/Views/DashboardView.html',
        controller: 'DashboardViewModel',
        controllerAs: 'DashboardVM'
    })
    .when('/Settings', {
        templateUrl: '/Scripts/Views/SettingsView.html',
        controller: 'SettingsViewModel',
        controllerAs: 'SettingsVM'
    })
    .when('/Profile', {
        templateUrl: '/Scripts/Views/ProfileView.html',
        controller: 'ProfileViewModel',
        controllerAs: 'ProfileVM'
    })
    .when('/Help', {
        templateUrl: '/Scripts/Views/HelpView.html',
        controller: 'HelpViewModel',
        controllerAs: 'HelpVM'
    });

    $locationProvider.html5Mode(true);

});