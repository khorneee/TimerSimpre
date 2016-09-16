/**
 * Created by adminlocal on 11/09/2016.
 */
angular.module('appTimeTracker')
    .controller('TrackerController', function($scope, $interval) {

        $scope.loaded = false;
        $scope.counter = null;
        $scope.status = null;
        $scope.projectsRaw = null;
        $scope.projectsConverted = null;
        var _intervalId;

        $scope.proyects = null;
        $scope.workingProyect = null;

        $scope.workingProyect =
        {
            _id: 2,
            task: 'Prueba3',
            proyect: 'Proyecto2',
            description: 'bla bla',
            seconds: 10,
            active: true,
            dateStart: "1473583660941"
        }

        $scope.logs = [];

        function init() {
            $scope.counter = "00:00:00";

            //workingProyect = $scope.proyects;
            //console.log($scope.proyects)

            //buscar contdores TODO buscar contadores
            //comprobar si hay alguno  si no contador


          //dame los proyectos
         /*   $scope.projectsRaw = projectsFactory.getProjects();
            $scope.projectsRaw.$watch(function () {
                $scope.projectsConverted = [];
                for (var i = 0, len = $scope.projectsRaw.length; i < len; i++) {
                    var _id = $scope.projectsRaw[i].$id;
                    var _name = $scope.projectsRaw[i].name;
                    $scope.projectsConverted.push({
                        id: _id,
                        name: _name
                    });
                };
            });*/

            //recupera el status del los contadores
            //$scope.status = statusFactory.getStatus();



            //cone a la escucha el $scope
            $scope.$watch('counter',function () {
                if ($scope.workingProyect.active) {
                    _intervalId = $interval(updateTime, 1000);
                } else {
                    stopTime();
                }
            });

            //Inicia el contador�?��?
           //_intervalId = $interval(updateTime, 1000);



        /*    $scope.status.$loaded(function () {
                $scope.loaded = true;
            });*/
            //cuando carguemos los proyectos
            $scope.loaded = true;
        }

        function updateTime() {
/*            var seconds = moment().diff(moment($scope.status.dateStart, 'x'), 'seconds');
            var elapsed = moment().startOf('day').seconds(seconds).format('HH:mm:ss');
            $scope.counter = elapsed;*/

            //calcula el timpo de diferencia entre la timepocomienzo y la fecha actual
            var seconds = moment().diff(moment($scope.workingProyect.dateStart, 'x'), 'seconds');
            var elapsed = moment().startOf('day').seconds(seconds).format('HH:mm:ss');
            $scope.counter = elapsed;
        }

        function stopTime() {
            $interval.cancel(_intervalId);
            $scope.counter = "00:00:00";
        }

        $scope.startTracker = function () {
/*            if (!!$scope.status.activeProjectId) {
                $scope.status.active = true;
                $scope.status.dateStart = moment().format('x');
                $scope.status.$save();
            }*/
            $scope.workingProyect.active = true;
            $scope.workingProyect.dateStart = moment().format('x');
        };

        $scope.stopTracker = function () {
            stopTime();

/*            $scope.status.active = false;
            if (!!$scope.status.dateStart) {
                var seconds = moment().diff(moment($scope.status.dateStart, 'x'), 'seconds');
                if (seconds > 0) {
                    logsFactory.addLog($scope.status.activeProjectId, $scope.status.dateStart, seconds, $scope.status.notes);
                }
            }
            $scope.status.$save();*/

            $scope.workingProyect.active = false;
            if (!!$scope.workingProyect.dateStart) {
                var seconds = moment().diff(moment($scope.workingProyect.dateStart, 'x'), 'seconds');
                $scope.workingProyect.seconds = seconds;
            }

            //a�adimos un id
            //$scope.workingProyect._id = $scope.proyects.length + 1;

            //dame la fehca de incio formateada y el time empleado formateado
            $scope.workingProyect.dateStartFormat = getDateStart($scope.workingProyect);
            $scope.workingProyect.timeSpend = getTime($scope.workingProyect);

            addarray(workingProyect)


            console.log($scope.logs);
        };

        function getDateStart (proyect) {
            return moment(proyect.dateStart, "x").format("HH:mm:ss, DD-MM-YYYY");
        };

        function getTime(proyect) {
            return moment().startOf('day').seconds(proyect.seconds).format('HH:mm:ss');
        };

        function addarray(object){
            $scope.logs.unshift(object);
        }


        $scope.resumeTracker = function () {
            stopTime();
        };



        init();

    })