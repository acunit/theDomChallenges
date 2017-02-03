/*Purpose: To create a JSON object that represents a car
Signature: makeCar(make, model, color) -> JSON Object
Ex:
  makeCar("Nissan Altima", 2012, "yellow") -> { make: "Nissan Ultima", year: 2012, color: "yellow"}
*/
var car;
var speed;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeCar(make, model, year){
 //This is the closure
 speed = 0;
 return {
   make: make,
   model: model,
   year: year,
   topSpeed: 230,
   getCar: function() {
     return this.make + " " + this.model + " " + this.year;
   },
   getSpeed: function(){ return speed;},
   accelerate: function() {
     if (speed < this.topSpeed) {
       speed+=10;
       document.getElementById("currentSpeed").innerHTML = speed + " mph";
     }
   },
   brake: function() {
     if (speed > 0) {
       speed-=getRandomInt(0,speed/2)};
       document.getElementById("currentSpeed").innerHTML = speed + " mph";
     },
   park: function() {speed=0}
 }
}
function enter(x) {
  if (x.keyCode == 13) {
    car = makeCar(document.getElementById("make").value, document.getElementById("model").value, document.getElementById("year").value);
    document.getElementById("carSpec").innerHTML = car.getCar();
    document.getElementById("topSpeed").innerHTML = car.topSpeed + " mph";
    document.getElementById("currentSpeed").innerHTML = speed + " mph";

  }
}

function createCar() {
  car = makeCar(document.getElementById("make").value, document.getElementById("model").value, document.getElementById("year").value);
  document.getElementById("carSpec").innerHTML = car.getCar();
}




function testFunction() {

}


// Creating a car
// var car = makeCar(document.getElementById("make").value, document.getElementById("model").value, document.getElementById("year").value);
//
// function displayCar() {
//   document.getElementById("carSpec").innerHTML = car.make + " " + car.model + " " + car.year;
// }
//
// while(car.getSpeed()!==100){
//   if (car.getSpeed()>car.topSpeed){
//     console.log("Slow down speed is limit: " + car.topSpeed);
//     car.brake();
//     break;
//   }
//   else {
//   car.accelerate();
//   console.log("The current speed is now: " + car.getSpeed() );
//   }
// }
//
// var iterationCount = 0;
//
// while(car.getSpeed()>0){
//   car.brake();
//     console.log("Current speed is: " + car.getSpeed());
//     if (car.getSpeed()<0){
//       car.park();
//       console.log("You have stopped: " +  car.getSpeed());
//     }
//   iterationCount++;
// }
//
// console.log("It took the car " + iterationCount + " brakes to finally stop.");


/*
car.getCar();
console.log(car.getSpeed())
car.accelerate()
console.log(car.getSpeed())
car.brake()
console.log(car.getSpeed())
*/
