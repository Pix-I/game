
var saveObject;

$(document).ready(function () {

});


function loadSave() {
    var cookie;
    var cookieJSON = $.cookie("pix-labs-savefile");
    if(cookie === undefined || cookie === null){
        cookie = newGame();
    } else{
        cookie = JSON.parse(cookieJSON);
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
        'pixel':{
            'cores': 1,
            'frequency' : 1,
            'consumption' : 10
        },
        'energy':{
            'windmill' : 1,
            'watermill': 0,
            'solar' : 0
        },
        'world':{
            'hefst': {
                'mine' : {
                    'minerals' : 100,
                    'copper': 20,
                    'diamond' : 0,
                    'quality' : 10
                }
            },
            'Europe' : {

            },
            'Afrika' : {

            },
            'Asia' : {

            }, 'Oceania' :{

            },'NorthAmerica' : {

            },'SouthAmerica' : {

            }
        },
        'gui' : {
            'showOptions' : false
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

var displayOptions;


angular.module('pixel-game',['ngAnimate'])
    .controller('gameController',function ($scope,$http,$timeout,$interval) {
        console.log("Loading save from cookie");
        displayOptions = false;

        $scope.saveObject = loadSave();
        $scope.gui = $scope.saveObject.gui;
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
        $scope.init = function () {

        };
        $scope.resetGame = function () {

        };
        $scope.buildEnergy = function (type) {
           switch (type){
               case 'windmill' :
                   console.log("Building windmill");
                   break;
           }
        };
        $scope.showOptions = function () {
            return displayOptions;
        };

    })
    ;
