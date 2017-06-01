
var saveObject;

$(document).ready(function () {

});


function loadSave() {
    var cookie = JSON.parse($.cookie("pix-labs-savefile"));
    if(cookie === undefined || cookie === null){
        cookie = newGame();
    }
    console.log(cookie.current);
    $.cookie("pix-labs-savefile",JSON.stringify(cookie));
    return cookie;
}

function newGame() {
    var newGame = {
        'version':'0',
        'power' : '5',
        'capacity':10,
        'money': 0,
        'startDate' : new Date(),
        'maxPower':10,
        'materials':{
            'metal':0,
            'wood':0,
            'sand':0,
            'water':0,
            'gold':0
        },
        'grains':{

        },
        'world':{

        }};
    return newGame;
}

function saveGame(saveObject) {
    $.cookie("pix-labs-savefile",JSON.stringify(saveObject));
    console.log("game saved!");
}

function shine() {
    //Make the pixel glow
}


function callAtTimeout() {
    console.log("Timeout occurred");
}

function addOneTest(test) {
    test++;
    console.log(test);
}

function checkMaxCurrent(saveObject) {
    if(saveObject!==undefined && saveObject.hasOwnProperty(power) && saveObject.hasOwnProperty(maxPower)){
        return current<maxCurrent;
    }
}



angular.module('pixel-game',['ngAnimate'])
    .controller('gameController',function ($scope,$http,$timeout,$interval) {
        console.log("Loading save from cookie");
        $scope.saveObject = loadSave();
        console.log("Game loaded");
        $scope.doAction = function () {
            $scope.saveObject.current++;
            console.log("Added current");
        };
        $scope.save = function() {
            saveGame($scope.saveObject);
        };
        // $timeout(callAtTimeout, 3000);
        $interval($scope.doAction,1000);
        $interval($scope.save,10000);

    })
    ;
