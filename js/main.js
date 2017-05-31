
var saveObject;

$(document).ready(function () {
    console.log("Loading save from cookie");
    saveObject = loadSave();
    console.log("Game loaded");
    window.setInterval(doAction(saveObject),1000);

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
    var newGame = {'current' : 0,'capacity':10,'money': 0,'startDate' : new Date()};
    return newGame;
}


function shine() {
    //Make the pixel glow
}



function doAction() {

}
