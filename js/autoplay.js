function autoplay_estrategy(gameManager){

	this.gameManager = gameManager;
	this.moves = [0, 1, 0, 3]; // 0: arriba , 2: abajo, 1: derecha, 3:izquierda
	this.down = 2;
	this.currentMove = 3; // Contador del movimiento del arreglo moves

}

autoplay_estrategy.prototype.nextMove = function(){

	this.currentMove++;

	if(this.currentMove >= this.moves.length) {
      this.currentMove = 0;
   }

   return this.moves[this.currentMove];

}

autoplay_estrategy.prototype.reset = function(){

	this.currentMove = 3;

}

autoplay_estrategy.prototype.nextDown= function(){


	return this.down;


}