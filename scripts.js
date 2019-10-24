// Remember to pay attention to page loading!
window.addEventListener("load", function(){

// Write your JavaScript code here.
let liftoff = document.getElementById("takeoff");
let status = document.getElementById("flightStatus");
let flightScreen = document.getElementById("shuttleBackground");
let shuttleHeight = document.getElementById("spaceShuttleHeight"); 
let land = document.getElementById("landing");
let abort = document.getElementById("missionAbort");
let goUp = document.getElementById("up");
let goDown = document.getElementById("down");
let goLeft = document.getElementById("left");
let goRight = document.getElementById("right");
let rocketImage = document.getElementById("rocket");


liftoff.addEventListener("click", function (){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response){
        status.innerHTML = "Shuttle in flight.";
        flightScreen.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = 10000;
    }
});
land.addEventListener("click", function(){
    let response = window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed.";
    flightScreen.style.background = "green";
    shuttleHeight.innerHTML = 0;

});
abort.addEventListener("click", function(){
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response){
        status.innerHTML = "Mission aborted.";
        flightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    };
});

});