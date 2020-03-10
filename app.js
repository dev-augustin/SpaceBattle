
    //alert("Welcome to Console game");
    var userName = prompt("What is your name?");
    alert("Welcome " +userName+ " to the Space Shuttle Game");

console.log('%c spacebattle', 'font-size: 40px');
 

/* Make alien ships with a class*/
class alienShip{
    constructor(hull, firepower, accuracy){
        this.hull=Math.floor(Math.random()*4)+3;
        this.firepower=Math.floor(Math.random()*3)+2;
        this.accuracy=(Math.floor(Math.random()*3)+6)/10;
    }
}
// Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array
let alienShipArray = [];

for (var i=0; i<6; i++){
    alienShipArray[i] = new alienShip();
}

console.log(alienShipArray);
// //console.log(alienShipArray[0]);


//Object for USS_Ship
let USS_Ship={
    hull:20, firepower:5, accuracy:17,
    attack: function(object){
        if (object.accuracy>USS_Ship.accuracy){
            console.log("Alien Won");
        }
        else {console.log("USS won");}
          
    }    

};
//Object for alienship
let alienShip1={
  hull:3, firepower:2, accuracy:10
 };
//attacking Single alienShip
// USS_Ship.attack(alienShip1);
// game.checkWin(USS_Ship, alienShip1);
let game={
        checkWin : function(object1,object2){
            if(object2.hull<=0){
                return ("Alien Ship went Kabloo-ey");
            }
            else if(object1.hull<=0){
                return ("USS_Ship lost");
            }
            else {
                return ("Proceed with the Game")}
        }
    };


//checking gameStatus
let gameStatus=game.checkWin(USS_Ship, alienShip1);
console.log(gameStatus);

//attacking Single alienShip
USS_Ship.attack(alienShip1);



//let gameStatus1="Proceed with the game";
// if (gameStatus==gameStatus1){
//     console.log("hi");
   // USS_Ship.attack(alienShip1);
// }
