/**
 * Created by adminlocal on 11/09/2016.
 */
angular.module('appTimeTracker')
    .controller('LogsController', function($scope) {

        console.log('Logscontroller');
        console.log($scope.logs);

  /*      $scope.loaded = false;
        $scope.projects = null;
        $scope.logs = null;

        function init() {
            $scope.projects = projectsFactory.getProjects();
            $scope.logs = logsFactory.getLogs();

            $scope.logs.$loaded().then(function (x) {
                $scope.loaded = x === $scope.logs;
            })
        }

        $scope.getProjectName = function(log) {
            for (var x = 0, lenx = $scope.projects.length; x < lenx; x++) {
                if ($scope.projects[x].$id == log.projectId) {
                    return $scope.projects[x].name;
                }
            }
            return null;
        };

        $scope.getDateStart = function(log) {
            return moment(log.dateStart, "x").format("HH:mm:ss, DD-MM-YYYY");
        };

        $scope.getTime = function(log) {
            return moment().startOf('day').seconds(log.seconds).format('HH:mm:ss');
        };

        init();*/

    })