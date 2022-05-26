(() => {
	// set up the puzzle pieces and boards
	
	//collect the buttons at the bottom of the page
	let bottomNav = document.querySelectorAll("#buttonHolder img"),	gameBoard = document.querySelector(".puzzle-board");


	function changeBGImg() {
		gameBoard.style.backgroundImage =`url(images/backGround${this.dataset.bgref}.jpg)`
	}

	// add event handling here 
	bottomNav.forEach(thumb => thumb.addEventListener("click",changeBGImg));

	










})();
