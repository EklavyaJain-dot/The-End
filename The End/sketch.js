var canvas, backgroundImage;

var allPlayers;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var distance = 0;
var humans, human1, human2, human3, human4;

function setup(){
	canvas = createCanvas(displayWidth - 20, displayHeight - 30);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
}

function draw(){

	if(playerCount === 4){
		game.update(1);

		if(gameState === 1){
			clear();
			game.play();
		}
	}
}