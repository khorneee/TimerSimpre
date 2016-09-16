/**
 * Created by adminlocal on 11/09/2016.
 */
angular.module('appTimeTracker', ['ngRoute','chart.js'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LogsController',
                templateUrl: 'app/views/logs.html'
            })
           /* .when('/projects', {
                controller: 'ProjectsController',
                templateUrl: 'app/views/projects.html'
            })
            .when('/projects/:projectId', {
                controller: 'CourseViewController',
                templateUrl: 'app/views/projectItem.html'
            })
            .when('/statistics', {
                controller: 'StatisticsController',
                templateUrl: 'app/views/statistics.html'
            })
            .when('/statistics/:projectId', {
                controller: 'StatisticsController',
                templateUrl: 'app/views/statistics.html'
            })*/
            .otherwise({ redirectTo: '/' });
    });